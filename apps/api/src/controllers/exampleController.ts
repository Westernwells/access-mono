import { Request, Response } from "express";
import createHttpError from "http-errors";
import exampleService from "../services/example/example";

export const exampleController = async (
  //   req: Request<
  //     {},
  //     UpdatePointSourceOutput | HasuraActionErrorResponse,
  //     { input: { point_source_data: UpdatePointSourceInput } }
  //   >,
  //   res: Response<UpdatePointSourceOutput | HasuraActionErrorResponse>
  req: Request,
  res: Response
) => {
  const { example_params } = req.body.input.example_data;

  try {
    const { success } = exampleService({ params: example_params });
    if (!success) {
      throw createHttpError(400, "example 400 error msg");
    }

    return res.status(200).json({ success: true, id: example_params.id });
  } catch (error: any) {
    console.error("📝 [EXAMPLE] Error:", error);
    return res.status(error?.status || 500).json({
      message: error?.message || String(error),
    });
  }
};
