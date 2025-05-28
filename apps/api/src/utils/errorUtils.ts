import { GraphQLError } from "graphql";
import { HttpError } from "http-errors";

interface StandardizedError {
  message: string;
  status: number;
}

/**
 * Parses an unknown error to a standardized message and HTTP status code.
 * @param err The unknown error caught in a try-catch block.
 * @returns A StandardizedError object with message and status.
 */
export function standardizeError(err: unknown): StandardizedError {
  let message: string = "An unexpected error occurred.";
  let status: number = 500;

  // 1. Check for HttpError first (these have a reliable 'status' or 'statusCode')
  if (err instanceof HttpError) {
    message = err.message;
    status = err.status || err.statusCode || 500; // HttpError should provide a status
  }
  // 2. Check for GraphQLError (from the 'graphql' package)
  else if (err instanceof GraphQLError) {
    message = err.message;
    // Safely check for status/statusCode within extensions.
    // GraphQLError.extensions is `Record<string, unknown> | undefined`,
    // so we can safely check properties on it after ensuring it's not undefined.
    const extensions = err.extensions;
    if (extensions) {
      // Direct access with typeof checks is fine here, no need for separate type guards
      // as `extensions` is already an object.
      if (typeof (extensions as { status?: number }).status === 'number' && (extensions as { status: number }).status >= 100 && (extensions as { status: number }).status < 600) {
        status = (extensions as { status: number }).status;
      } else if (typeof (extensions as { statusCode?: number }).statusCode === 'number' && (extensions as { statusCode: number }).statusCode >= 100 && (extensions as { statusCode: number }).statusCode < 600) {
        status = (extensions as { statusCode: number }).statusCode;
      }
      // Optional: Map GraphQL error 'code' from extensions if your backend uses them
      // if (typeof (extensions as { code?: string }).code === 'string') {
      //   const code = (extensions as { code: string }).code;
      //   if (code === 'UNAUTHENTICATED') { status = 401; }
      //   else if (code === 'BAD_USER_INPUT') { status = 400; }
      // }
    }
  }
  // 3. Check for standard JavaScript Error instances
  else if (err instanceof Error) {
    message = err.message;
  }
  // 4. Fallback for all other `unknown` types (strings, plain objects, null, etc.)
  else if (typeof err === 'string') {
    message = err;
  } else if (typeof err === 'object' && err !== null) {
    // For general objects, try to get message and status if they exist.
    // We use temporary type assertions here because we don't know the object's exact shape,
    // but the `typeof` checks ensure runtime safety.
    const potentialError = err as { message?: string; status?: number; statusCode?: number };
    if (typeof potentialError.message === 'string') {
      message = potentialError.message;
    }
    if (typeof potentialError.status === 'number' && potentialError.status >= 100 && potentialError.status < 600) {
      status = potentialError.status;
    } else if (typeof potentialError.statusCode === 'number' && potentialError.statusCode >= 100 && potentialError.statusCode < 600) {
      status = potentialError.statusCode;
    } else {
      // If we couldn't find a message or status on the object
      message = String(err);
    }
  } else {
    // Catch-all for primitives like numbers, booleans, undefined
    message = String(err);
  }

  return { message, status };
}