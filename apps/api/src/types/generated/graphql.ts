/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  timestamp: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type RequestSmsVerifCodeInput = {
  phone: Scalars['String']['input'];
};

export type RequestSmsVerifCodeOutput = {
  __typename?: 'RequestSmsVerifCodeOutput';
  verificationStatus: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export type UserSignInInput = {
  phone: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserSignInOutput = {
  __typename?: 'UserSignInOutput';
  accessToken: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserSignUpInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  unitId: Scalars['uuid']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserSignUpOutput = {
  __typename?: 'UserSignUpOutput';
  accessToken: Scalars['String']['output'];
  userId: Scalars['uuid']['output'];
};

/** columns and relationships of "access_logs" */
export type AccessLogs = {
  __typename?: 'access_logs';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  status?: Maybe<CallStatusEnum>;
  type: CallTypesEnum;
  unit_id: Scalars['uuid']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  visitor_image_uri?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "access_logs" */
export type AccessLogsAggregate = {
  __typename?: 'access_logs_aggregate';
  aggregate?: Maybe<AccessLogsAggregateFields>;
  nodes: Array<AccessLogs>;
};

export type AccessLogsAggregateBoolExp = {
  count?: InputMaybe<AccessLogsAggregateBoolExpCount>;
};

export type AccessLogsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AccessLogsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AccessLogsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "access_logs" */
export type AccessLogsAggregateFields = {
  __typename?: 'access_logs_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AccessLogsMaxFields>;
  min?: Maybe<AccessLogsMinFields>;
};


/** aggregate fields of "access_logs" */
export type AccessLogsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AccessLogsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "access_logs" */
export type AccessLogsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AccessLogsMaxOrderBy>;
  min?: InputMaybe<AccessLogsMinOrderBy>;
};

/** input type for inserting array relation for remote table "access_logs" */
export type AccessLogsArrRelInsertInput = {
  data: Array<AccessLogsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AccessLogsOnConflict>;
};

/** Boolean expression to filter rows from the table "access_logs". All fields are combined with a logical 'AND'. */
export type AccessLogsBoolExp = {
  _and?: InputMaybe<Array<AccessLogsBoolExp>>;
  _not?: InputMaybe<AccessLogsBoolExp>;
  _or?: InputMaybe<Array<AccessLogsBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  status?: InputMaybe<CallStatusEnumComparisonExp>;
  type?: InputMaybe<CallTypesEnumComparisonExp>;
  unit_id?: InputMaybe<UuidComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  visitor_image_uri?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "access_logs" */
export enum AccessLogsConstraint {
  /** unique or primary key constraint on columns "id" */
  ACCESS_LOGS_PKEY = 'access_logs_pkey'
}

/** input type for inserting data into table "access_logs" */
export type AccessLogsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<CallStatusEnum>;
  type?: InputMaybe<CallTypesEnum>;
  unit_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  visitor_image_uri?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type AccessLogsMaxFields = {
  __typename?: 'access_logs_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  unit_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  visitor_image_uri?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "access_logs" */
export type AccessLogsMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  unit_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  visitor_image_uri?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AccessLogsMinFields = {
  __typename?: 'access_logs_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  unit_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  visitor_image_uri?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "access_logs" */
export type AccessLogsMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  unit_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  visitor_image_uri?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "access_logs" */
export type AccessLogsMutationResponse = {
  __typename?: 'access_logs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AccessLogs>;
};

/** input type for inserting object relation for remote table "access_logs" */
export type AccessLogsObjRelInsertInput = {
  data: AccessLogsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<AccessLogsOnConflict>;
};

/** on_conflict condition type for table "access_logs" */
export type AccessLogsOnConflict = {
  constraint: AccessLogsConstraint;
  update_columns?: Array<AccessLogsUpdateColumn>;
  where?: InputMaybe<AccessLogsBoolExp>;
};

/** Ordering options when selecting data from "access_logs". */
export type AccessLogsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  unit_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  visitor_image_uri?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: access_logs */
export type AccessLogsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "access_logs" */
export enum AccessLogsSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  STATUS = 'status',
  /** column name */
  TYPE = 'type',
  /** column name */
  UNIT_ID = 'unit_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  VISITOR_IMAGE_URI = 'visitor_image_uri'
}

/** input type for updating data in table "access_logs" */
export type AccessLogsSetInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<CallStatusEnum>;
  type?: InputMaybe<CallTypesEnum>;
  unit_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  visitor_image_uri?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "access_logs" */
export type AccessLogsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: AccessLogsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AccessLogsStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<CallStatusEnum>;
  type?: InputMaybe<CallTypesEnum>;
  unit_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  visitor_image_uri?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "access_logs" */
export enum AccessLogsUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  STATUS = 'status',
  /** column name */
  TYPE = 'type',
  /** column name */
  UNIT_ID = 'unit_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  VISITOR_IMAGE_URI = 'visitor_image_uri'
}

export type AccessLogsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AccessLogsSetInput>;
  /** filter the rows which have to be updated */
  where: AccessLogsBoolExp;
};

/** columns and relationships of "announcements" */
export type Announcements = {
  __typename?: 'announcements';
  /** An object relationship */
  building?: Maybe<Buildings>;
  building_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  description: Scalars['jsonb']['output'];
  id: Scalars['uuid']['output'];
  scheduled_at: Scalars['timestamp']['output'];
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "announcements" */
export type AnnouncementsDescriptionArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "announcements" */
export type AnnouncementsAggregate = {
  __typename?: 'announcements_aggregate';
  aggregate?: Maybe<AnnouncementsAggregateFields>;
  nodes: Array<Announcements>;
};

export type AnnouncementsAggregateBoolExp = {
  count?: InputMaybe<AnnouncementsAggregateBoolExpCount>;
};

export type AnnouncementsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AnnouncementsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AnnouncementsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "announcements" */
export type AnnouncementsAggregateFields = {
  __typename?: 'announcements_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AnnouncementsMaxFields>;
  min?: Maybe<AnnouncementsMinFields>;
};


/** aggregate fields of "announcements" */
export type AnnouncementsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AnnouncementsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "announcements" */
export type AnnouncementsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AnnouncementsMaxOrderBy>;
  min?: InputMaybe<AnnouncementsMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AnnouncementsAppendInput = {
  description?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "announcements" */
export type AnnouncementsArrRelInsertInput = {
  data: Array<AnnouncementsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AnnouncementsOnConflict>;
};

/** Boolean expression to filter rows from the table "announcements". All fields are combined with a logical 'AND'. */
export type AnnouncementsBoolExp = {
  _and?: InputMaybe<Array<AnnouncementsBoolExp>>;
  _not?: InputMaybe<AnnouncementsBoolExp>;
  _or?: InputMaybe<Array<AnnouncementsBoolExp>>;
  building?: InputMaybe<BuildingsBoolExp>;
  building_id?: InputMaybe<UuidComparisonExp>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  description?: InputMaybe<JsonbComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  scheduled_at?: InputMaybe<TimestampComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "announcements" */
export enum AnnouncementsConstraint {
  /** unique or primary key constraint on columns "id" */
  ANNOUNCEMENTS_PKEY = 'announcements_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AnnouncementsDeleteAtPathInput = {
  description?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AnnouncementsDeleteElemInput = {
  description?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AnnouncementsDeleteKeyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "announcements" */
export type AnnouncementsInsertInput = {
  building?: InputMaybe<BuildingsObjRelInsertInput>;
  building_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  scheduled_at?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type AnnouncementsMaxFields = {
  __typename?: 'announcements_max_fields';
  building_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  scheduled_at?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "announcements" */
export type AnnouncementsMaxOrderBy = {
  building_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  scheduled_at?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AnnouncementsMinFields = {
  __typename?: 'announcements_min_fields';
  building_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  scheduled_at?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "announcements" */
export type AnnouncementsMinOrderBy = {
  building_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  scheduled_at?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "announcements" */
export type AnnouncementsMutationResponse = {
  __typename?: 'announcements_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Announcements>;
};

/** on_conflict condition type for table "announcements" */
export type AnnouncementsOnConflict = {
  constraint: AnnouncementsConstraint;
  update_columns?: Array<AnnouncementsUpdateColumn>;
  where?: InputMaybe<AnnouncementsBoolExp>;
};

/** Ordering options when selecting data from "announcements". */
export type AnnouncementsOrderBy = {
  building?: InputMaybe<BuildingsOrderBy>;
  building_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  scheduled_at?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: announcements */
export type AnnouncementsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AnnouncementsPrependInput = {
  description?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "announcements" */
export enum AnnouncementsSelectColumn {
  /** column name */
  BUILDING_ID = 'building_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  SCHEDULED_AT = 'scheduled_at',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "announcements" */
export type AnnouncementsSetInput = {
  building_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  scheduled_at?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "announcements" */
export type AnnouncementsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: AnnouncementsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AnnouncementsStreamCursorValueInput = {
  building_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  scheduled_at?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "announcements" */
export enum AnnouncementsUpdateColumn {
  /** column name */
  BUILDING_ID = 'building_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  SCHEDULED_AT = 'scheduled_at',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATED_AT = 'updated_at'
}

export type AnnouncementsUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AnnouncementsAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AnnouncementsDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AnnouncementsDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AnnouncementsDeleteKeyInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AnnouncementsPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AnnouncementsSetInput>;
  /** filter the rows which have to be updated */
  where: AnnouncementsBoolExp;
};

/** columns and relationships of "buildings" */
export type Buildings = {
  __typename?: 'buildings';
  address: Scalars['String']['output'];
  /** An array relationship */
  announcements: Array<Announcements>;
  /** An aggregate relationship */
  announcements_aggregate: AnnouncementsAggregate;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  devices: Array<Devices>;
  /** An aggregate relationship */
  devices_aggregate: DevicesAggregate;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: NotificationsAggregate;
  /** An object relationship */
  organization: Organizations;
  organization_id: Scalars['uuid']['output'];
  /** An array relationship */
  units: Array<Units>;
  /** An aggregate relationship */
  units_aggregate: UnitsAggregate;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "buildings" */
export type BuildingsAnnouncementsArgs = {
  distinct_on?: InputMaybe<Array<AnnouncementsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AnnouncementsOrderBy>>;
  where?: InputMaybe<AnnouncementsBoolExp>;
};


/** columns and relationships of "buildings" */
export type BuildingsAnnouncementsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AnnouncementsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AnnouncementsOrderBy>>;
  where?: InputMaybe<AnnouncementsBoolExp>;
};


/** columns and relationships of "buildings" */
export type BuildingsDevicesArgs = {
  distinct_on?: InputMaybe<Array<DevicesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DevicesOrderBy>>;
  where?: InputMaybe<DevicesBoolExp>;
};


/** columns and relationships of "buildings" */
export type BuildingsDevicesAggregateArgs = {
  distinct_on?: InputMaybe<Array<DevicesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DevicesOrderBy>>;
  where?: InputMaybe<DevicesBoolExp>;
};


/** columns and relationships of "buildings" */
export type BuildingsNotificationsArgs = {
  distinct_on?: InputMaybe<Array<NotificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationsOrderBy>>;
  where?: InputMaybe<NotificationsBoolExp>;
};


/** columns and relationships of "buildings" */
export type BuildingsNotificationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationsOrderBy>>;
  where?: InputMaybe<NotificationsBoolExp>;
};


/** columns and relationships of "buildings" */
export type BuildingsUnitsArgs = {
  distinct_on?: InputMaybe<Array<UnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UnitsOrderBy>>;
  where?: InputMaybe<UnitsBoolExp>;
};


/** columns and relationships of "buildings" */
export type BuildingsUnitsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UnitsOrderBy>>;
  where?: InputMaybe<UnitsBoolExp>;
};

/** aggregated selection of "buildings" */
export type BuildingsAggregate = {
  __typename?: 'buildings_aggregate';
  aggregate?: Maybe<BuildingsAggregateFields>;
  nodes: Array<Buildings>;
};

export type BuildingsAggregateBoolExp = {
  count?: InputMaybe<BuildingsAggregateBoolExpCount>;
};

export type BuildingsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<BuildingsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<BuildingsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "buildings" */
export type BuildingsAggregateFields = {
  __typename?: 'buildings_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<BuildingsMaxFields>;
  min?: Maybe<BuildingsMinFields>;
};


/** aggregate fields of "buildings" */
export type BuildingsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<BuildingsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "buildings" */
export type BuildingsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<BuildingsMaxOrderBy>;
  min?: InputMaybe<BuildingsMinOrderBy>;
};

/** input type for inserting array relation for remote table "buildings" */
export type BuildingsArrRelInsertInput = {
  data: Array<BuildingsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<BuildingsOnConflict>;
};

/** Boolean expression to filter rows from the table "buildings". All fields are combined with a logical 'AND'. */
export type BuildingsBoolExp = {
  _and?: InputMaybe<Array<BuildingsBoolExp>>;
  _not?: InputMaybe<BuildingsBoolExp>;
  _or?: InputMaybe<Array<BuildingsBoolExp>>;
  address?: InputMaybe<StringComparisonExp>;
  announcements?: InputMaybe<AnnouncementsBoolExp>;
  announcements_aggregate?: InputMaybe<AnnouncementsAggregateBoolExp>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  devices?: InputMaybe<DevicesBoolExp>;
  devices_aggregate?: InputMaybe<DevicesAggregateBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  notifications?: InputMaybe<NotificationsBoolExp>;
  notifications_aggregate?: InputMaybe<NotificationsAggregateBoolExp>;
  organization?: InputMaybe<OrganizationsBoolExp>;
  organization_id?: InputMaybe<UuidComparisonExp>;
  units?: InputMaybe<UnitsBoolExp>;
  units_aggregate?: InputMaybe<UnitsAggregateBoolExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "buildings" */
export enum BuildingsConstraint {
  /** unique or primary key constraint on columns "id" */
  BUILDINGS_PKEY = 'buildings_pkey'
}

/** input type for inserting data into table "buildings" */
export type BuildingsInsertInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  announcements?: InputMaybe<AnnouncementsArrRelInsertInput>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  devices?: InputMaybe<DevicesArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<NotificationsArrRelInsertInput>;
  organization?: InputMaybe<OrganizationsObjRelInsertInput>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  units?: InputMaybe<UnitsArrRelInsertInput>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type BuildingsMaxFields = {
  __typename?: 'buildings_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "buildings" */
export type BuildingsMaxOrderBy = {
  address?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  organization_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type BuildingsMinFields = {
  __typename?: 'buildings_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "buildings" */
export type BuildingsMinOrderBy = {
  address?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  organization_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "buildings" */
export type BuildingsMutationResponse = {
  __typename?: 'buildings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Buildings>;
};

/** input type for inserting object relation for remote table "buildings" */
export type BuildingsObjRelInsertInput = {
  data: BuildingsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<BuildingsOnConflict>;
};

/** on_conflict condition type for table "buildings" */
export type BuildingsOnConflict = {
  constraint: BuildingsConstraint;
  update_columns?: Array<BuildingsUpdateColumn>;
  where?: InputMaybe<BuildingsBoolExp>;
};

/** Ordering options when selecting data from "buildings". */
export type BuildingsOrderBy = {
  address?: InputMaybe<OrderBy>;
  announcements_aggregate?: InputMaybe<AnnouncementsAggregateOrderBy>;
  created_at?: InputMaybe<OrderBy>;
  devices_aggregate?: InputMaybe<DevicesAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  notifications_aggregate?: InputMaybe<NotificationsAggregateOrderBy>;
  organization?: InputMaybe<OrganizationsOrderBy>;
  organization_id?: InputMaybe<OrderBy>;
  units_aggregate?: InputMaybe<UnitsAggregateOrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: buildings */
export type BuildingsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "buildings" */
export enum BuildingsSelectColumn {
  /** column name */
  ADDRESS = 'address',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATION_ID = 'organization_id',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "buildings" */
export type BuildingsSetInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "buildings" */
export type BuildingsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: BuildingsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type BuildingsStreamCursorValueInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "buildings" */
export enum BuildingsUpdateColumn {
  /** column name */
  ADDRESS = 'address',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  ORGANIZATION_ID = 'organization_id',
  /** column name */
  UPDATED_AT = 'updated_at'
}

export type BuildingsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<BuildingsSetInput>;
  /** filter the rows which have to be updated */
  where: BuildingsBoolExp;
};

/** columns and relationships of "call_status" */
export type CallStatus = {
  __typename?: 'call_status';
  comment: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "call_status" */
export type CallStatusAggregate = {
  __typename?: 'call_status_aggregate';
  aggregate?: Maybe<CallStatusAggregateFields>;
  nodes: Array<CallStatus>;
};

/** aggregate fields of "call_status" */
export type CallStatusAggregateFields = {
  __typename?: 'call_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<CallStatusMaxFields>;
  min?: Maybe<CallStatusMinFields>;
};


/** aggregate fields of "call_status" */
export type CallStatusAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CallStatusSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "call_status". All fields are combined with a logical 'AND'. */
export type CallStatusBoolExp = {
  _and?: InputMaybe<Array<CallStatusBoolExp>>;
  _not?: InputMaybe<CallStatusBoolExp>;
  _or?: InputMaybe<Array<CallStatusBoolExp>>;
  comment?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "call_status" */
export enum CallStatusConstraint {
  /** unique or primary key constraint on columns "value" */
  CALL_STATUS_PKEY = 'call_status_pkey'
}

export enum CallStatusEnum {
  /** A call that was answered */
  ANSWERED = 'answered',
  /** A call that was not answered */
  MISSED = 'missed',
  /** A call that resulted in door unlock */
  UNLOCKED = 'unlocked'
}

/** Boolean expression to compare columns of type "call_status_enum". All fields are combined with logical 'AND'. */
export type CallStatusEnumComparisonExp = {
  _eq?: InputMaybe<CallStatusEnum>;
  _in?: InputMaybe<Array<CallStatusEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<CallStatusEnum>;
  _nin?: InputMaybe<Array<CallStatusEnum>>;
};

/** input type for inserting data into table "call_status" */
export type CallStatusInsertInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type CallStatusMaxFields = {
  __typename?: 'call_status_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type CallStatusMinFields = {
  __typename?: 'call_status_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "call_status" */
export type CallStatusMutationResponse = {
  __typename?: 'call_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<CallStatus>;
};

/** on_conflict condition type for table "call_status" */
export type CallStatusOnConflict = {
  constraint: CallStatusConstraint;
  update_columns?: Array<CallStatusUpdateColumn>;
  where?: InputMaybe<CallStatusBoolExp>;
};

/** Ordering options when selecting data from "call_status". */
export type CallStatusOrderBy = {
  comment?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: call_status */
export type CallStatusPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "call_status" */
export enum CallStatusSelectColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  VALUE = 'value'
}

/** input type for updating data in table "call_status" */
export type CallStatusSetInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "call_status" */
export type CallStatusStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CallStatusStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CallStatusStreamCursorValueInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "call_status" */
export enum CallStatusUpdateColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  VALUE = 'value'
}

export type CallStatusUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CallStatusSetInput>;
  /** filter the rows which have to be updated */
  where: CallStatusBoolExp;
};

/** columns and relationships of "call_types" */
export type CallTypes = {
  __typename?: 'call_types';
  comment: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "call_types" */
export type CallTypesAggregate = {
  __typename?: 'call_types_aggregate';
  aggregate?: Maybe<CallTypesAggregateFields>;
  nodes: Array<CallTypes>;
};

/** aggregate fields of "call_types" */
export type CallTypesAggregateFields = {
  __typename?: 'call_types_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<CallTypesMaxFields>;
  min?: Maybe<CallTypesMinFields>;
};


/** aggregate fields of "call_types" */
export type CallTypesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CallTypesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "call_types". All fields are combined with a logical 'AND'. */
export type CallTypesBoolExp = {
  _and?: InputMaybe<Array<CallTypesBoolExp>>;
  _not?: InputMaybe<CallTypesBoolExp>;
  _or?: InputMaybe<Array<CallTypesBoolExp>>;
  comment?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "call_types" */
export enum CallTypesConstraint {
  /** unique or primary key constraint on columns "value" */
  CALL_TYPES_PKEY = 'call_types_pkey'
}

export enum CallTypesEnum {
  /** Access via one-time code */
  ACCESS_CODE = 'access_code',
  /** Access via intercom call */
  CALL = 'call'
}

/** Boolean expression to compare columns of type "call_types_enum". All fields are combined with logical 'AND'. */
export type CallTypesEnumComparisonExp = {
  _eq?: InputMaybe<CallTypesEnum>;
  _in?: InputMaybe<Array<CallTypesEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<CallTypesEnum>;
  _nin?: InputMaybe<Array<CallTypesEnum>>;
};

/** input type for inserting data into table "call_types" */
export type CallTypesInsertInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type CallTypesMaxFields = {
  __typename?: 'call_types_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type CallTypesMinFields = {
  __typename?: 'call_types_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "call_types" */
export type CallTypesMutationResponse = {
  __typename?: 'call_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<CallTypes>;
};

/** on_conflict condition type for table "call_types" */
export type CallTypesOnConflict = {
  constraint: CallTypesConstraint;
  update_columns?: Array<CallTypesUpdateColumn>;
  where?: InputMaybe<CallTypesBoolExp>;
};

/** Ordering options when selecting data from "call_types". */
export type CallTypesOrderBy = {
  comment?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: call_types */
export type CallTypesPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "call_types" */
export enum CallTypesSelectColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  VALUE = 'value'
}

/** input type for updating data in table "call_types" */
export type CallTypesSetInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "call_types" */
export type CallTypesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CallTypesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CallTypesStreamCursorValueInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "call_types" */
export enum CallTypesUpdateColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  VALUE = 'value'
}

export type CallTypesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CallTypesSetInput>;
  /** filter the rows which have to be updated */
  where: CallTypesBoolExp;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  ASC = 'ASC',
  /** descending ordering of the cursor */
  DESC = 'DESC'
}

/** columns and relationships of "devices" */
export type Devices = {
  __typename?: 'devices';
  /** An object relationship */
  building: Buildings;
  building_id: Scalars['uuid']['output'];
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregated selection of "devices" */
export type DevicesAggregate = {
  __typename?: 'devices_aggregate';
  aggregate?: Maybe<DevicesAggregateFields>;
  nodes: Array<Devices>;
};

export type DevicesAggregateBoolExp = {
  count?: InputMaybe<DevicesAggregateBoolExpCount>;
};

export type DevicesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<DevicesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DevicesBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "devices" */
export type DevicesAggregateFields = {
  __typename?: 'devices_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<DevicesMaxFields>;
  min?: Maybe<DevicesMinFields>;
};


/** aggregate fields of "devices" */
export type DevicesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DevicesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "devices" */
export type DevicesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<DevicesMaxOrderBy>;
  min?: InputMaybe<DevicesMinOrderBy>;
};

/** input type for inserting array relation for remote table "devices" */
export type DevicesArrRelInsertInput = {
  data: Array<DevicesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<DevicesOnConflict>;
};

/** Boolean expression to filter rows from the table "devices". All fields are combined with a logical 'AND'. */
export type DevicesBoolExp = {
  _and?: InputMaybe<Array<DevicesBoolExp>>;
  _not?: InputMaybe<DevicesBoolExp>;
  _or?: InputMaybe<Array<DevicesBoolExp>>;
  building?: InputMaybe<BuildingsBoolExp>;
  building_id?: InputMaybe<UuidComparisonExp>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "devices" */
export enum DevicesConstraint {
  /** unique or primary key constraint on columns "id" */
  DEVICES_PKEY = 'devices_pkey'
}

/** input type for inserting data into table "devices" */
export type DevicesInsertInput = {
  building?: InputMaybe<BuildingsObjRelInsertInput>;
  building_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type DevicesMaxFields = {
  __typename?: 'devices_max_fields';
  building_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "devices" */
export type DevicesMaxOrderBy = {
  building_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type DevicesMinFields = {
  __typename?: 'devices_min_fields';
  building_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "devices" */
export type DevicesMinOrderBy = {
  building_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "devices" */
export type DevicesMutationResponse = {
  __typename?: 'devices_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Devices>;
};

/** on_conflict condition type for table "devices" */
export type DevicesOnConflict = {
  constraint: DevicesConstraint;
  update_columns?: Array<DevicesUpdateColumn>;
  where?: InputMaybe<DevicesBoolExp>;
};

/** Ordering options when selecting data from "devices". */
export type DevicesOrderBy = {
  building?: InputMaybe<BuildingsOrderBy>;
  building_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: devices */
export type DevicesPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "devices" */
export enum DevicesSelectColumn {
  /** column name */
  BUILDING_ID = 'building_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "devices" */
export type DevicesSetInput = {
  building_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "devices" */
export type DevicesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: DevicesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DevicesStreamCursorValueInput = {
  building_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "devices" */
export enum DevicesUpdateColumn {
  /** column name */
  BUILDING_ID = 'building_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATED_AT = 'updated_at'
}

export type DevicesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DevicesSetInput>;
  /** filter the rows which have to be updated */
  where: DevicesBoolExp;
};

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "access_logs" */
  delete_access_logs?: Maybe<AccessLogsMutationResponse>;
  /** delete single row from the table: "access_logs" */
  delete_access_logs_by_pk?: Maybe<AccessLogs>;
  /** delete data from the table: "announcements" */
  delete_announcements?: Maybe<AnnouncementsMutationResponse>;
  /** delete single row from the table: "announcements" */
  delete_announcements_by_pk?: Maybe<Announcements>;
  /** delete data from the table: "buildings" */
  delete_buildings?: Maybe<BuildingsMutationResponse>;
  /** delete single row from the table: "buildings" */
  delete_buildings_by_pk?: Maybe<Buildings>;
  /** delete data from the table: "call_status" */
  delete_call_status?: Maybe<CallStatusMutationResponse>;
  /** delete single row from the table: "call_status" */
  delete_call_status_by_pk?: Maybe<CallStatus>;
  /** delete data from the table: "call_types" */
  delete_call_types?: Maybe<CallTypesMutationResponse>;
  /** delete single row from the table: "call_types" */
  delete_call_types_by_pk?: Maybe<CallTypes>;
  /** delete data from the table: "devices" */
  delete_devices?: Maybe<DevicesMutationResponse>;
  /** delete single row from the table: "devices" */
  delete_devices_by_pk?: Maybe<Devices>;
  /** delete data from the table: "notification_types" */
  delete_notification_types?: Maybe<NotificationTypesMutationResponse>;
  /** delete single row from the table: "notification_types" */
  delete_notification_types_by_pk?: Maybe<NotificationTypes>;
  /** delete data from the table: "notifications" */
  delete_notifications?: Maybe<NotificationsMutationResponse>;
  /** delete single row from the table: "notifications" */
  delete_notifications_by_pk?: Maybe<Notifications>;
  /** delete data from the table: "one_time_access_code" */
  delete_one_time_access_code?: Maybe<OneTimeAccessCodeMutationResponse>;
  /** delete single row from the table: "one_time_access_code" */
  delete_one_time_access_code_by_pk?: Maybe<OneTimeAccessCode>;
  /** delete data from the table: "one_time_access_code_status_types" */
  delete_one_time_access_code_status_types?: Maybe<OneTimeAccessCodeStatusTypesMutationResponse>;
  /** delete single row from the table: "one_time_access_code_status_types" */
  delete_one_time_access_code_status_types_by_pk?: Maybe<OneTimeAccessCodeStatusTypes>;
  /** delete data from the table: "organizations" */
  delete_organizations?: Maybe<OrganizationsMutationResponse>;
  /** delete single row from the table: "organizations" */
  delete_organizations_by_pk?: Maybe<Organizations>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<RolesMutationResponse>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "settings" */
  delete_settings?: Maybe<SettingsMutationResponse>;
  /** delete single row from the table: "settings" */
  delete_settings_by_pk?: Maybe<Settings>;
  /** delete data from the table: "two_fa_types" */
  delete_two_fa_types?: Maybe<TwoFaTypesMutationResponse>;
  /** delete single row from the table: "two_fa_types" */
  delete_two_fa_types_by_pk?: Maybe<TwoFaTypes>;
  /** delete data from the table: "units" */
  delete_units?: Maybe<UnitsMutationResponse>;
  /** delete single row from the table: "units" */
  delete_units_by_pk?: Maybe<Units>;
  /** delete data from the table: "user_units" */
  delete_user_units?: Maybe<UserUnitsMutationResponse>;
  /** delete single row from the table: "user_units" */
  delete_user_units_by_pk?: Maybe<UserUnits>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "access_logs" */
  insert_access_logs?: Maybe<AccessLogsMutationResponse>;
  /** insert a single row into the table: "access_logs" */
  insert_access_logs_one?: Maybe<AccessLogs>;
  /** insert data into the table: "announcements" */
  insert_announcements?: Maybe<AnnouncementsMutationResponse>;
  /** insert a single row into the table: "announcements" */
  insert_announcements_one?: Maybe<Announcements>;
  /** insert data into the table: "buildings" */
  insert_buildings?: Maybe<BuildingsMutationResponse>;
  /** insert a single row into the table: "buildings" */
  insert_buildings_one?: Maybe<Buildings>;
  /** insert data into the table: "call_status" */
  insert_call_status?: Maybe<CallStatusMutationResponse>;
  /** insert a single row into the table: "call_status" */
  insert_call_status_one?: Maybe<CallStatus>;
  /** insert data into the table: "call_types" */
  insert_call_types?: Maybe<CallTypesMutationResponse>;
  /** insert a single row into the table: "call_types" */
  insert_call_types_one?: Maybe<CallTypes>;
  /** insert data into the table: "devices" */
  insert_devices?: Maybe<DevicesMutationResponse>;
  /** insert a single row into the table: "devices" */
  insert_devices_one?: Maybe<Devices>;
  /** insert data into the table: "notification_types" */
  insert_notification_types?: Maybe<NotificationTypesMutationResponse>;
  /** insert a single row into the table: "notification_types" */
  insert_notification_types_one?: Maybe<NotificationTypes>;
  /** insert data into the table: "notifications" */
  insert_notifications?: Maybe<NotificationsMutationResponse>;
  /** insert a single row into the table: "notifications" */
  insert_notifications_one?: Maybe<Notifications>;
  /** insert data into the table: "one_time_access_code" */
  insert_one_time_access_code?: Maybe<OneTimeAccessCodeMutationResponse>;
  /** insert a single row into the table: "one_time_access_code" */
  insert_one_time_access_code_one?: Maybe<OneTimeAccessCode>;
  /** insert data into the table: "one_time_access_code_status_types" */
  insert_one_time_access_code_status_types?: Maybe<OneTimeAccessCodeStatusTypesMutationResponse>;
  /** insert a single row into the table: "one_time_access_code_status_types" */
  insert_one_time_access_code_status_types_one?: Maybe<OneTimeAccessCodeStatusTypes>;
  /** insert data into the table: "organizations" */
  insert_organizations?: Maybe<OrganizationsMutationResponse>;
  /** insert a single row into the table: "organizations" */
  insert_organizations_one?: Maybe<Organizations>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<RolesMutationResponse>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "settings" */
  insert_settings?: Maybe<SettingsMutationResponse>;
  /** insert a single row into the table: "settings" */
  insert_settings_one?: Maybe<Settings>;
  /** insert data into the table: "two_fa_types" */
  insert_two_fa_types?: Maybe<TwoFaTypesMutationResponse>;
  /** insert a single row into the table: "two_fa_types" */
  insert_two_fa_types_one?: Maybe<TwoFaTypes>;
  /** insert data into the table: "units" */
  insert_units?: Maybe<UnitsMutationResponse>;
  /** insert a single row into the table: "units" */
  insert_units_one?: Maybe<Units>;
  /** insert data into the table: "user_units" */
  insert_user_units?: Maybe<UserUnitsMutationResponse>;
  /** insert a single row into the table: "user_units" */
  insert_user_units_one?: Maybe<UserUnits>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "access_logs" */
  update_access_logs?: Maybe<AccessLogsMutationResponse>;
  /** update single row of the table: "access_logs" */
  update_access_logs_by_pk?: Maybe<AccessLogs>;
  /** update multiples rows of table: "access_logs" */
  update_access_logs_many?: Maybe<Array<Maybe<AccessLogsMutationResponse>>>;
  /** update data of the table: "announcements" */
  update_announcements?: Maybe<AnnouncementsMutationResponse>;
  /** update single row of the table: "announcements" */
  update_announcements_by_pk?: Maybe<Announcements>;
  /** update multiples rows of table: "announcements" */
  update_announcements_many?: Maybe<Array<Maybe<AnnouncementsMutationResponse>>>;
  /** update data of the table: "buildings" */
  update_buildings?: Maybe<BuildingsMutationResponse>;
  /** update single row of the table: "buildings" */
  update_buildings_by_pk?: Maybe<Buildings>;
  /** update multiples rows of table: "buildings" */
  update_buildings_many?: Maybe<Array<Maybe<BuildingsMutationResponse>>>;
  /** update data of the table: "call_status" */
  update_call_status?: Maybe<CallStatusMutationResponse>;
  /** update single row of the table: "call_status" */
  update_call_status_by_pk?: Maybe<CallStatus>;
  /** update multiples rows of table: "call_status" */
  update_call_status_many?: Maybe<Array<Maybe<CallStatusMutationResponse>>>;
  /** update data of the table: "call_types" */
  update_call_types?: Maybe<CallTypesMutationResponse>;
  /** update single row of the table: "call_types" */
  update_call_types_by_pk?: Maybe<CallTypes>;
  /** update multiples rows of table: "call_types" */
  update_call_types_many?: Maybe<Array<Maybe<CallTypesMutationResponse>>>;
  /** update data of the table: "devices" */
  update_devices?: Maybe<DevicesMutationResponse>;
  /** update single row of the table: "devices" */
  update_devices_by_pk?: Maybe<Devices>;
  /** update multiples rows of table: "devices" */
  update_devices_many?: Maybe<Array<Maybe<DevicesMutationResponse>>>;
  /** update data of the table: "notification_types" */
  update_notification_types?: Maybe<NotificationTypesMutationResponse>;
  /** update single row of the table: "notification_types" */
  update_notification_types_by_pk?: Maybe<NotificationTypes>;
  /** update multiples rows of table: "notification_types" */
  update_notification_types_many?: Maybe<Array<Maybe<NotificationTypesMutationResponse>>>;
  /** update data of the table: "notifications" */
  update_notifications?: Maybe<NotificationsMutationResponse>;
  /** update single row of the table: "notifications" */
  update_notifications_by_pk?: Maybe<Notifications>;
  /** update multiples rows of table: "notifications" */
  update_notifications_many?: Maybe<Array<Maybe<NotificationsMutationResponse>>>;
  /** update data of the table: "one_time_access_code" */
  update_one_time_access_code?: Maybe<OneTimeAccessCodeMutationResponse>;
  /** update single row of the table: "one_time_access_code" */
  update_one_time_access_code_by_pk?: Maybe<OneTimeAccessCode>;
  /** update multiples rows of table: "one_time_access_code" */
  update_one_time_access_code_many?: Maybe<Array<Maybe<OneTimeAccessCodeMutationResponse>>>;
  /** update data of the table: "one_time_access_code_status_types" */
  update_one_time_access_code_status_types?: Maybe<OneTimeAccessCodeStatusTypesMutationResponse>;
  /** update single row of the table: "one_time_access_code_status_types" */
  update_one_time_access_code_status_types_by_pk?: Maybe<OneTimeAccessCodeStatusTypes>;
  /** update multiples rows of table: "one_time_access_code_status_types" */
  update_one_time_access_code_status_types_many?: Maybe<Array<Maybe<OneTimeAccessCodeStatusTypesMutationResponse>>>;
  /** update data of the table: "organizations" */
  update_organizations?: Maybe<OrganizationsMutationResponse>;
  /** update single row of the table: "organizations" */
  update_organizations_by_pk?: Maybe<Organizations>;
  /** update multiples rows of table: "organizations" */
  update_organizations_many?: Maybe<Array<Maybe<OrganizationsMutationResponse>>>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<RolesMutationResponse>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update multiples rows of table: "roles" */
  update_roles_many?: Maybe<Array<Maybe<RolesMutationResponse>>>;
  /** update data of the table: "settings" */
  update_settings?: Maybe<SettingsMutationResponse>;
  /** update single row of the table: "settings" */
  update_settings_by_pk?: Maybe<Settings>;
  /** update multiples rows of table: "settings" */
  update_settings_many?: Maybe<Array<Maybe<SettingsMutationResponse>>>;
  /** update data of the table: "two_fa_types" */
  update_two_fa_types?: Maybe<TwoFaTypesMutationResponse>;
  /** update single row of the table: "two_fa_types" */
  update_two_fa_types_by_pk?: Maybe<TwoFaTypes>;
  /** update multiples rows of table: "two_fa_types" */
  update_two_fa_types_many?: Maybe<Array<Maybe<TwoFaTypesMutationResponse>>>;
  /** update data of the table: "units" */
  update_units?: Maybe<UnitsMutationResponse>;
  /** update single row of the table: "units" */
  update_units_by_pk?: Maybe<Units>;
  /** update multiples rows of table: "units" */
  update_units_many?: Maybe<Array<Maybe<UnitsMutationResponse>>>;
  /** update data of the table: "user_units" */
  update_user_units?: Maybe<UserUnitsMutationResponse>;
  /** update single row of the table: "user_units" */
  update_user_units_by_pk?: Maybe<UserUnits>;
  /** update multiples rows of table: "user_units" */
  update_user_units_many?: Maybe<Array<Maybe<UserUnitsMutationResponse>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<UsersMutationResponse>>>;
  userSignIn: UserSignInOutput;
  userSignUp: UserSignUpOutput;
};


/** mutation root */
export type MutationRootDeleteAccessLogsArgs = {
  where: AccessLogsBoolExp;
};


/** mutation root */
export type MutationRootDeleteAccessLogsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteAnnouncementsArgs = {
  where: AnnouncementsBoolExp;
};


/** mutation root */
export type MutationRootDeleteAnnouncementsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteBuildingsArgs = {
  where: BuildingsBoolExp;
};


/** mutation root */
export type MutationRootDeleteBuildingsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteCallStatusArgs = {
  where: CallStatusBoolExp;
};


/** mutation root */
export type MutationRootDeleteCallStatusByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type MutationRootDeleteCallTypesArgs = {
  where: CallTypesBoolExp;
};


/** mutation root */
export type MutationRootDeleteCallTypesByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type MutationRootDeleteDevicesArgs = {
  where: DevicesBoolExp;
};


/** mutation root */
export type MutationRootDeleteDevicesByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteNotificationTypesArgs = {
  where: NotificationTypesBoolExp;
};


/** mutation root */
export type MutationRootDeleteNotificationTypesByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type MutationRootDeleteNotificationsArgs = {
  where: NotificationsBoolExp;
};


/** mutation root */
export type MutationRootDeleteNotificationsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteOneTimeAccessCodeArgs = {
  where: OneTimeAccessCodeBoolExp;
};


/** mutation root */
export type MutationRootDeleteOneTimeAccessCodeByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteOneTimeAccessCodeStatusTypesArgs = {
  where: OneTimeAccessCodeStatusTypesBoolExp;
};


/** mutation root */
export type MutationRootDeleteOneTimeAccessCodeStatusTypesByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type MutationRootDeleteOrganizationsArgs = {
  where: OrganizationsBoolExp;
};


/** mutation root */
export type MutationRootDeleteOrganizationsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteRolesArgs = {
  where: RolesBoolExp;
};


/** mutation root */
export type MutationRootDeleteRolesByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type MutationRootDeleteSettingsArgs = {
  where: SettingsBoolExp;
};


/** mutation root */
export type MutationRootDeleteSettingsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteTwoFaTypesArgs = {
  where: TwoFaTypesBoolExp;
};


/** mutation root */
export type MutationRootDeleteTwoFaTypesByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type MutationRootDeleteUnitsArgs = {
  where: UnitsBoolExp;
};


/** mutation root */
export type MutationRootDeleteUnitsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteUserUnitsArgs = {
  where: UserUnitsBoolExp;
};


/** mutation root */
export type MutationRootDeleteUserUnitsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootInsertAccessLogsArgs = {
  objects: Array<AccessLogsInsertInput>;
  on_conflict?: InputMaybe<AccessLogsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAccessLogsOneArgs = {
  object: AccessLogsInsertInput;
  on_conflict?: InputMaybe<AccessLogsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAnnouncementsArgs = {
  objects: Array<AnnouncementsInsertInput>;
  on_conflict?: InputMaybe<AnnouncementsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAnnouncementsOneArgs = {
  object: AnnouncementsInsertInput;
  on_conflict?: InputMaybe<AnnouncementsOnConflict>;
};


/** mutation root */
export type MutationRootInsertBuildingsArgs = {
  objects: Array<BuildingsInsertInput>;
  on_conflict?: InputMaybe<BuildingsOnConflict>;
};


/** mutation root */
export type MutationRootInsertBuildingsOneArgs = {
  object: BuildingsInsertInput;
  on_conflict?: InputMaybe<BuildingsOnConflict>;
};


/** mutation root */
export type MutationRootInsertCallStatusArgs = {
  objects: Array<CallStatusInsertInput>;
  on_conflict?: InputMaybe<CallStatusOnConflict>;
};


/** mutation root */
export type MutationRootInsertCallStatusOneArgs = {
  object: CallStatusInsertInput;
  on_conflict?: InputMaybe<CallStatusOnConflict>;
};


/** mutation root */
export type MutationRootInsertCallTypesArgs = {
  objects: Array<CallTypesInsertInput>;
  on_conflict?: InputMaybe<CallTypesOnConflict>;
};


/** mutation root */
export type MutationRootInsertCallTypesOneArgs = {
  object: CallTypesInsertInput;
  on_conflict?: InputMaybe<CallTypesOnConflict>;
};


/** mutation root */
export type MutationRootInsertDevicesArgs = {
  objects: Array<DevicesInsertInput>;
  on_conflict?: InputMaybe<DevicesOnConflict>;
};


/** mutation root */
export type MutationRootInsertDevicesOneArgs = {
  object: DevicesInsertInput;
  on_conflict?: InputMaybe<DevicesOnConflict>;
};


/** mutation root */
export type MutationRootInsertNotificationTypesArgs = {
  objects: Array<NotificationTypesInsertInput>;
  on_conflict?: InputMaybe<NotificationTypesOnConflict>;
};


/** mutation root */
export type MutationRootInsertNotificationTypesOneArgs = {
  object: NotificationTypesInsertInput;
  on_conflict?: InputMaybe<NotificationTypesOnConflict>;
};


/** mutation root */
export type MutationRootInsertNotificationsArgs = {
  objects: Array<NotificationsInsertInput>;
  on_conflict?: InputMaybe<NotificationsOnConflict>;
};


/** mutation root */
export type MutationRootInsertNotificationsOneArgs = {
  object: NotificationsInsertInput;
  on_conflict?: InputMaybe<NotificationsOnConflict>;
};


/** mutation root */
export type MutationRootInsertOneTimeAccessCodeArgs = {
  objects: Array<OneTimeAccessCodeInsertInput>;
  on_conflict?: InputMaybe<OneTimeAccessCodeOnConflict>;
};


/** mutation root */
export type MutationRootInsertOneTimeAccessCodeOneArgs = {
  object: OneTimeAccessCodeInsertInput;
  on_conflict?: InputMaybe<OneTimeAccessCodeOnConflict>;
};


/** mutation root */
export type MutationRootInsertOneTimeAccessCodeStatusTypesArgs = {
  objects: Array<OneTimeAccessCodeStatusTypesInsertInput>;
  on_conflict?: InputMaybe<OneTimeAccessCodeStatusTypesOnConflict>;
};


/** mutation root */
export type MutationRootInsertOneTimeAccessCodeStatusTypesOneArgs = {
  object: OneTimeAccessCodeStatusTypesInsertInput;
  on_conflict?: InputMaybe<OneTimeAccessCodeStatusTypesOnConflict>;
};


/** mutation root */
export type MutationRootInsertOrganizationsArgs = {
  objects: Array<OrganizationsInsertInput>;
  on_conflict?: InputMaybe<OrganizationsOnConflict>;
};


/** mutation root */
export type MutationRootInsertOrganizationsOneArgs = {
  object: OrganizationsInsertInput;
  on_conflict?: InputMaybe<OrganizationsOnConflict>;
};


/** mutation root */
export type MutationRootInsertRolesArgs = {
  objects: Array<RolesInsertInput>;
  on_conflict?: InputMaybe<RolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertRolesOneArgs = {
  object: RolesInsertInput;
  on_conflict?: InputMaybe<RolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertSettingsArgs = {
  objects: Array<SettingsInsertInput>;
  on_conflict?: InputMaybe<SettingsOnConflict>;
};


/** mutation root */
export type MutationRootInsertSettingsOneArgs = {
  object: SettingsInsertInput;
  on_conflict?: InputMaybe<SettingsOnConflict>;
};


/** mutation root */
export type MutationRootInsertTwoFaTypesArgs = {
  objects: Array<TwoFaTypesInsertInput>;
  on_conflict?: InputMaybe<TwoFaTypesOnConflict>;
};


/** mutation root */
export type MutationRootInsertTwoFaTypesOneArgs = {
  object: TwoFaTypesInsertInput;
  on_conflict?: InputMaybe<TwoFaTypesOnConflict>;
};


/** mutation root */
export type MutationRootInsertUnitsArgs = {
  objects: Array<UnitsInsertInput>;
  on_conflict?: InputMaybe<UnitsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUnitsOneArgs = {
  object: UnitsInsertInput;
  on_conflict?: InputMaybe<UnitsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserUnitsArgs = {
  objects: Array<UserUnitsInsertInput>;
  on_conflict?: InputMaybe<UserUnitsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserUnitsOneArgs = {
  object: UserUnitsInsertInput;
  on_conflict?: InputMaybe<UserUnitsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootUpdateAccessLogsArgs = {
  _set?: InputMaybe<AccessLogsSetInput>;
  where: AccessLogsBoolExp;
};


/** mutation root */
export type MutationRootUpdateAccessLogsByPkArgs = {
  _set?: InputMaybe<AccessLogsSetInput>;
  pk_columns: AccessLogsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAccessLogsManyArgs = {
  updates: Array<AccessLogsUpdates>;
};


/** mutation root */
export type MutationRootUpdateAnnouncementsArgs = {
  _append?: InputMaybe<AnnouncementsAppendInput>;
  _delete_at_path?: InputMaybe<AnnouncementsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<AnnouncementsDeleteElemInput>;
  _delete_key?: InputMaybe<AnnouncementsDeleteKeyInput>;
  _prepend?: InputMaybe<AnnouncementsPrependInput>;
  _set?: InputMaybe<AnnouncementsSetInput>;
  where: AnnouncementsBoolExp;
};


/** mutation root */
export type MutationRootUpdateAnnouncementsByPkArgs = {
  _append?: InputMaybe<AnnouncementsAppendInput>;
  _delete_at_path?: InputMaybe<AnnouncementsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<AnnouncementsDeleteElemInput>;
  _delete_key?: InputMaybe<AnnouncementsDeleteKeyInput>;
  _prepend?: InputMaybe<AnnouncementsPrependInput>;
  _set?: InputMaybe<AnnouncementsSetInput>;
  pk_columns: AnnouncementsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAnnouncementsManyArgs = {
  updates: Array<AnnouncementsUpdates>;
};


/** mutation root */
export type MutationRootUpdateBuildingsArgs = {
  _set?: InputMaybe<BuildingsSetInput>;
  where: BuildingsBoolExp;
};


/** mutation root */
export type MutationRootUpdateBuildingsByPkArgs = {
  _set?: InputMaybe<BuildingsSetInput>;
  pk_columns: BuildingsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateBuildingsManyArgs = {
  updates: Array<BuildingsUpdates>;
};


/** mutation root */
export type MutationRootUpdateCallStatusArgs = {
  _set?: InputMaybe<CallStatusSetInput>;
  where: CallStatusBoolExp;
};


/** mutation root */
export type MutationRootUpdateCallStatusByPkArgs = {
  _set?: InputMaybe<CallStatusSetInput>;
  pk_columns: CallStatusPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateCallStatusManyArgs = {
  updates: Array<CallStatusUpdates>;
};


/** mutation root */
export type MutationRootUpdateCallTypesArgs = {
  _set?: InputMaybe<CallTypesSetInput>;
  where: CallTypesBoolExp;
};


/** mutation root */
export type MutationRootUpdateCallTypesByPkArgs = {
  _set?: InputMaybe<CallTypesSetInput>;
  pk_columns: CallTypesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateCallTypesManyArgs = {
  updates: Array<CallTypesUpdates>;
};


/** mutation root */
export type MutationRootUpdateDevicesArgs = {
  _set?: InputMaybe<DevicesSetInput>;
  where: DevicesBoolExp;
};


/** mutation root */
export type MutationRootUpdateDevicesByPkArgs = {
  _set?: InputMaybe<DevicesSetInput>;
  pk_columns: DevicesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateDevicesManyArgs = {
  updates: Array<DevicesUpdates>;
};


/** mutation root */
export type MutationRootUpdateNotificationTypesArgs = {
  _set?: InputMaybe<NotificationTypesSetInput>;
  where: NotificationTypesBoolExp;
};


/** mutation root */
export type MutationRootUpdateNotificationTypesByPkArgs = {
  _set?: InputMaybe<NotificationTypesSetInput>;
  pk_columns: NotificationTypesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateNotificationTypesManyArgs = {
  updates: Array<NotificationTypesUpdates>;
};


/** mutation root */
export type MutationRootUpdateNotificationsArgs = {
  _set?: InputMaybe<NotificationsSetInput>;
  where: NotificationsBoolExp;
};


/** mutation root */
export type MutationRootUpdateNotificationsByPkArgs = {
  _set?: InputMaybe<NotificationsSetInput>;
  pk_columns: NotificationsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateNotificationsManyArgs = {
  updates: Array<NotificationsUpdates>;
};


/** mutation root */
export type MutationRootUpdateOneTimeAccessCodeArgs = {
  _set?: InputMaybe<OneTimeAccessCodeSetInput>;
  where: OneTimeAccessCodeBoolExp;
};


/** mutation root */
export type MutationRootUpdateOneTimeAccessCodeByPkArgs = {
  _set?: InputMaybe<OneTimeAccessCodeSetInput>;
  pk_columns: OneTimeAccessCodePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateOneTimeAccessCodeManyArgs = {
  updates: Array<OneTimeAccessCodeUpdates>;
};


/** mutation root */
export type MutationRootUpdateOneTimeAccessCodeStatusTypesArgs = {
  _set?: InputMaybe<OneTimeAccessCodeStatusTypesSetInput>;
  where: OneTimeAccessCodeStatusTypesBoolExp;
};


/** mutation root */
export type MutationRootUpdateOneTimeAccessCodeStatusTypesByPkArgs = {
  _set?: InputMaybe<OneTimeAccessCodeStatusTypesSetInput>;
  pk_columns: OneTimeAccessCodeStatusTypesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateOneTimeAccessCodeStatusTypesManyArgs = {
  updates: Array<OneTimeAccessCodeStatusTypesUpdates>;
};


/** mutation root */
export type MutationRootUpdateOrganizationsArgs = {
  _set?: InputMaybe<OrganizationsSetInput>;
  where: OrganizationsBoolExp;
};


/** mutation root */
export type MutationRootUpdateOrganizationsByPkArgs = {
  _set?: InputMaybe<OrganizationsSetInput>;
  pk_columns: OrganizationsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateOrganizationsManyArgs = {
  updates: Array<OrganizationsUpdates>;
};


/** mutation root */
export type MutationRootUpdateRolesArgs = {
  _set?: InputMaybe<RolesSetInput>;
  where: RolesBoolExp;
};


/** mutation root */
export type MutationRootUpdateRolesByPkArgs = {
  _set?: InputMaybe<RolesSetInput>;
  pk_columns: RolesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateRolesManyArgs = {
  updates: Array<RolesUpdates>;
};


/** mutation root */
export type MutationRootUpdateSettingsArgs = {
  _set?: InputMaybe<SettingsSetInput>;
  where: SettingsBoolExp;
};


/** mutation root */
export type MutationRootUpdateSettingsByPkArgs = {
  _set?: InputMaybe<SettingsSetInput>;
  pk_columns: SettingsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateSettingsManyArgs = {
  updates: Array<SettingsUpdates>;
};


/** mutation root */
export type MutationRootUpdateTwoFaTypesArgs = {
  _set?: InputMaybe<TwoFaTypesSetInput>;
  where: TwoFaTypesBoolExp;
};


/** mutation root */
export type MutationRootUpdateTwoFaTypesByPkArgs = {
  _set?: InputMaybe<TwoFaTypesSetInput>;
  pk_columns: TwoFaTypesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateTwoFaTypesManyArgs = {
  updates: Array<TwoFaTypesUpdates>;
};


/** mutation root */
export type MutationRootUpdateUnitsArgs = {
  _inc?: InputMaybe<UnitsIncInput>;
  _set?: InputMaybe<UnitsSetInput>;
  where: UnitsBoolExp;
};


/** mutation root */
export type MutationRootUpdateUnitsByPkArgs = {
  _inc?: InputMaybe<UnitsIncInput>;
  _set?: InputMaybe<UnitsSetInput>;
  pk_columns: UnitsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUnitsManyArgs = {
  updates: Array<UnitsUpdates>;
};


/** mutation root */
export type MutationRootUpdateUserUnitsArgs = {
  _set?: InputMaybe<UserUnitsSetInput>;
  where: UserUnitsBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserUnitsByPkArgs = {
  _set?: InputMaybe<UserUnitsSetInput>;
  pk_columns: UserUnitsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUserUnitsManyArgs = {
  updates: Array<UserUnitsUpdates>;
};


/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};


/** mutation root */
export type MutationRootUserSignInArgs = {
  signInData: UserSignInInput;
};


/** mutation root */
export type MutationRootUserSignUpArgs = {
  signUpData: UserSignUpInput;
};

/** columns and relationships of "notification_types" */
export type NotificationTypes = {
  __typename?: 'notification_types';
  comment: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "notification_types" */
export type NotificationTypesAggregate = {
  __typename?: 'notification_types_aggregate';
  aggregate?: Maybe<NotificationTypesAggregateFields>;
  nodes: Array<NotificationTypes>;
};

/** aggregate fields of "notification_types" */
export type NotificationTypesAggregateFields = {
  __typename?: 'notification_types_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<NotificationTypesMaxFields>;
  min?: Maybe<NotificationTypesMinFields>;
};


/** aggregate fields of "notification_types" */
export type NotificationTypesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<NotificationTypesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "notification_types". All fields are combined with a logical 'AND'. */
export type NotificationTypesBoolExp = {
  _and?: InputMaybe<Array<NotificationTypesBoolExp>>;
  _not?: InputMaybe<NotificationTypesBoolExp>;
  _or?: InputMaybe<Array<NotificationTypesBoolExp>>;
  comment?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "notification_types" */
export enum NotificationTypesConstraint {
  /** unique or primary key constraint on columns "value" */
  NOTIFICATION_TYPES_PKEY = 'notification_types_pkey'
}

export enum NotificationTypesEnum {
  /** Notification for an answered call */
  ANSWERED_CALL = 'answered_call',
  /** Notification for a missed call */
  MISSED_CALL = 'missed_call',
  /** System-generated notification */
  SYSTEM_NOTICE = 'system_notice'
}

/** Boolean expression to compare columns of type "notification_types_enum". All fields are combined with logical 'AND'. */
export type NotificationTypesEnumComparisonExp = {
  _eq?: InputMaybe<NotificationTypesEnum>;
  _in?: InputMaybe<Array<NotificationTypesEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<NotificationTypesEnum>;
  _nin?: InputMaybe<Array<NotificationTypesEnum>>;
};

/** input type for inserting data into table "notification_types" */
export type NotificationTypesInsertInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type NotificationTypesMaxFields = {
  __typename?: 'notification_types_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type NotificationTypesMinFields = {
  __typename?: 'notification_types_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "notification_types" */
export type NotificationTypesMutationResponse = {
  __typename?: 'notification_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<NotificationTypes>;
};

/** on_conflict condition type for table "notification_types" */
export type NotificationTypesOnConflict = {
  constraint: NotificationTypesConstraint;
  update_columns?: Array<NotificationTypesUpdateColumn>;
  where?: InputMaybe<NotificationTypesBoolExp>;
};

/** Ordering options when selecting data from "notification_types". */
export type NotificationTypesOrderBy = {
  comment?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: notification_types */
export type NotificationTypesPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "notification_types" */
export enum NotificationTypesSelectColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  VALUE = 'value'
}

/** input type for updating data in table "notification_types" */
export type NotificationTypesSetInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "notification_types" */
export type NotificationTypesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: NotificationTypesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type NotificationTypesStreamCursorValueInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "notification_types" */
export enum NotificationTypesUpdateColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  VALUE = 'value'
}

export type NotificationTypesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<NotificationTypesSetInput>;
  /** filter the rows which have to be updated */
  where: NotificationTypesBoolExp;
};

/** columns and relationships of "notifications" */
export type Notifications = {
  __typename?: 'notifications';
  /** An object relationship */
  building: Buildings;
  building_id: Scalars['uuid']['output'];
  created_at?: Maybe<Scalars['timestamp']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
  type: NotificationTypesEnum;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregated selection of "notifications" */
export type NotificationsAggregate = {
  __typename?: 'notifications_aggregate';
  aggregate?: Maybe<NotificationsAggregateFields>;
  nodes: Array<Notifications>;
};

export type NotificationsAggregateBoolExp = {
  count?: InputMaybe<NotificationsAggregateBoolExpCount>;
};

export type NotificationsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<NotificationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<NotificationsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "notifications" */
export type NotificationsAggregateFields = {
  __typename?: 'notifications_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<NotificationsMaxFields>;
  min?: Maybe<NotificationsMinFields>;
};


/** aggregate fields of "notifications" */
export type NotificationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<NotificationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "notifications" */
export type NotificationsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<NotificationsMaxOrderBy>;
  min?: InputMaybe<NotificationsMinOrderBy>;
};

/** input type for inserting array relation for remote table "notifications" */
export type NotificationsArrRelInsertInput = {
  data: Array<NotificationsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<NotificationsOnConflict>;
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type NotificationsBoolExp = {
  _and?: InputMaybe<Array<NotificationsBoolExp>>;
  _not?: InputMaybe<NotificationsBoolExp>;
  _or?: InputMaybe<Array<NotificationsBoolExp>>;
  building?: InputMaybe<BuildingsBoolExp>;
  building_id?: InputMaybe<UuidComparisonExp>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<NotificationTypesEnumComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "notifications" */
export enum NotificationsConstraint {
  /** unique or primary key constraint on columns "id" */
  NOTIFICATIONS_PKEY = 'notifications_pkey'
}

/** input type for inserting data into table "notifications" */
export type NotificationsInsertInput = {
  building?: InputMaybe<BuildingsObjRelInsertInput>;
  building_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<NotificationTypesEnum>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type NotificationsMaxFields = {
  __typename?: 'notifications_max_fields';
  building_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "notifications" */
export type NotificationsMaxOrderBy = {
  building_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type NotificationsMinFields = {
  __typename?: 'notifications_min_fields';
  building_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "notifications" */
export type NotificationsMinOrderBy = {
  building_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "notifications" */
export type NotificationsMutationResponse = {
  __typename?: 'notifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notifications>;
};

/** on_conflict condition type for table "notifications" */
export type NotificationsOnConflict = {
  constraint: NotificationsConstraint;
  update_columns?: Array<NotificationsUpdateColumn>;
  where?: InputMaybe<NotificationsBoolExp>;
};

/** Ordering options when selecting data from "notifications". */
export type NotificationsOrderBy = {
  building?: InputMaybe<BuildingsOrderBy>;
  building_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: notifications */
export type NotificationsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "notifications" */
export enum NotificationsSelectColumn {
  /** column name */
  BUILDING_ID = 'building_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  TITLE = 'title',
  /** column name */
  TYPE = 'type',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "notifications" */
export type NotificationsSetInput = {
  building_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<NotificationTypesEnum>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "notifications" */
export type NotificationsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: NotificationsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type NotificationsStreamCursorValueInput = {
  building_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<NotificationTypesEnum>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "notifications" */
export enum NotificationsUpdateColumn {
  /** column name */
  BUILDING_ID = 'building_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  TITLE = 'title',
  /** column name */
  TYPE = 'type',
  /** column name */
  UPDATED_AT = 'updated_at'
}

export type NotificationsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<NotificationsSetInput>;
  /** filter the rows which have to be updated */
  where: NotificationsBoolExp;
};

/** columns and relationships of "one_time_access_code" */
export type OneTimeAccessCode = {
  __typename?: 'one_time_access_code';
  /** An object relationship */
  access_log?: Maybe<AccessLogs>;
  access_log_id?: Maybe<Scalars['uuid']['output']>;
  code: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  purpose: Scalars['String']['output'];
  status: OneTimeAccessCodeStatusTypesEnum;
  /** An object relationship */
  unit: Units;
  unit_id: Scalars['uuid']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  valid_from?: Maybe<Scalars['timestamp']['output']>;
  valid_to?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregated selection of "one_time_access_code" */
export type OneTimeAccessCodeAggregate = {
  __typename?: 'one_time_access_code_aggregate';
  aggregate?: Maybe<OneTimeAccessCodeAggregateFields>;
  nodes: Array<OneTimeAccessCode>;
};

export type OneTimeAccessCodeAggregateBoolExp = {
  count?: InputMaybe<OneTimeAccessCodeAggregateBoolExpCount>;
};

export type OneTimeAccessCodeAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OneTimeAccessCodeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<OneTimeAccessCodeBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "one_time_access_code" */
export type OneTimeAccessCodeAggregateFields = {
  __typename?: 'one_time_access_code_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<OneTimeAccessCodeMaxFields>;
  min?: Maybe<OneTimeAccessCodeMinFields>;
};


/** aggregate fields of "one_time_access_code" */
export type OneTimeAccessCodeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OneTimeAccessCodeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "one_time_access_code" */
export type OneTimeAccessCodeAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OneTimeAccessCodeMaxOrderBy>;
  min?: InputMaybe<OneTimeAccessCodeMinOrderBy>;
};

/** input type for inserting array relation for remote table "one_time_access_code" */
export type OneTimeAccessCodeArrRelInsertInput = {
  data: Array<OneTimeAccessCodeInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<OneTimeAccessCodeOnConflict>;
};

/** Boolean expression to filter rows from the table "one_time_access_code". All fields are combined with a logical 'AND'. */
export type OneTimeAccessCodeBoolExp = {
  _and?: InputMaybe<Array<OneTimeAccessCodeBoolExp>>;
  _not?: InputMaybe<OneTimeAccessCodeBoolExp>;
  _or?: InputMaybe<Array<OneTimeAccessCodeBoolExp>>;
  access_log?: InputMaybe<AccessLogsBoolExp>;
  access_log_id?: InputMaybe<UuidComparisonExp>;
  code?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  purpose?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<OneTimeAccessCodeStatusTypesEnumComparisonExp>;
  unit?: InputMaybe<UnitsBoolExp>;
  unit_id?: InputMaybe<UuidComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  valid_from?: InputMaybe<TimestampComparisonExp>;
  valid_to?: InputMaybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "one_time_access_code" */
export enum OneTimeAccessCodeConstraint {
  /** unique or primary key constraint on columns "id" */
  ONE_TIME_ACCESS_CODE_PKEY = 'one_time_access_code_pkey'
}

/** input type for inserting data into table "one_time_access_code" */
export type OneTimeAccessCodeInsertInput = {
  access_log?: InputMaybe<AccessLogsObjRelInsertInput>;
  access_log_id?: InputMaybe<Scalars['uuid']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OneTimeAccessCodeStatusTypesEnum>;
  unit?: InputMaybe<UnitsObjRelInsertInput>;
  unit_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  valid_from?: InputMaybe<Scalars['timestamp']['input']>;
  valid_to?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type OneTimeAccessCodeMaxFields = {
  __typename?: 'one_time_access_code_max_fields';
  access_log_id?: Maybe<Scalars['uuid']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  valid_from?: Maybe<Scalars['timestamp']['output']>;
  valid_to?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "one_time_access_code" */
export type OneTimeAccessCodeMaxOrderBy = {
  access_log_id?: InputMaybe<OrderBy>;
  code?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  purpose?: InputMaybe<OrderBy>;
  unit_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  valid_from?: InputMaybe<OrderBy>;
  valid_to?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OneTimeAccessCodeMinFields = {
  __typename?: 'one_time_access_code_min_fields';
  access_log_id?: Maybe<Scalars['uuid']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
  unit_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  valid_from?: Maybe<Scalars['timestamp']['output']>;
  valid_to?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "one_time_access_code" */
export type OneTimeAccessCodeMinOrderBy = {
  access_log_id?: InputMaybe<OrderBy>;
  code?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  purpose?: InputMaybe<OrderBy>;
  unit_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  valid_from?: InputMaybe<OrderBy>;
  valid_to?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "one_time_access_code" */
export type OneTimeAccessCodeMutationResponse = {
  __typename?: 'one_time_access_code_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<OneTimeAccessCode>;
};

/** on_conflict condition type for table "one_time_access_code" */
export type OneTimeAccessCodeOnConflict = {
  constraint: OneTimeAccessCodeConstraint;
  update_columns?: Array<OneTimeAccessCodeUpdateColumn>;
  where?: InputMaybe<OneTimeAccessCodeBoolExp>;
};

/** Ordering options when selecting data from "one_time_access_code". */
export type OneTimeAccessCodeOrderBy = {
  access_log?: InputMaybe<AccessLogsOrderBy>;
  access_log_id?: InputMaybe<OrderBy>;
  code?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  purpose?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  unit?: InputMaybe<UnitsOrderBy>;
  unit_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  valid_from?: InputMaybe<OrderBy>;
  valid_to?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: one_time_access_code */
export type OneTimeAccessCodePkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "one_time_access_code" */
export enum OneTimeAccessCodeSelectColumn {
  /** column name */
  ACCESS_LOG_ID = 'access_log_id',
  /** column name */
  CODE = 'code',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  PURPOSE = 'purpose',
  /** column name */
  STATUS = 'status',
  /** column name */
  UNIT_ID = 'unit_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  VALID_FROM = 'valid_from',
  /** column name */
  VALID_TO = 'valid_to'
}

/** input type for updating data in table "one_time_access_code" */
export type OneTimeAccessCodeSetInput = {
  access_log_id?: InputMaybe<Scalars['uuid']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OneTimeAccessCodeStatusTypesEnum>;
  unit_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  valid_from?: InputMaybe<Scalars['timestamp']['input']>;
  valid_to?: InputMaybe<Scalars['timestamp']['input']>;
};

/** columns and relationships of "one_time_access_code_status_types" */
export type OneTimeAccessCodeStatusTypes = {
  __typename?: 'one_time_access_code_status_types';
  comment: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "one_time_access_code_status_types" */
export type OneTimeAccessCodeStatusTypesAggregate = {
  __typename?: 'one_time_access_code_status_types_aggregate';
  aggregate?: Maybe<OneTimeAccessCodeStatusTypesAggregateFields>;
  nodes: Array<OneTimeAccessCodeStatusTypes>;
};

/** aggregate fields of "one_time_access_code_status_types" */
export type OneTimeAccessCodeStatusTypesAggregateFields = {
  __typename?: 'one_time_access_code_status_types_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<OneTimeAccessCodeStatusTypesMaxFields>;
  min?: Maybe<OneTimeAccessCodeStatusTypesMinFields>;
};


/** aggregate fields of "one_time_access_code_status_types" */
export type OneTimeAccessCodeStatusTypesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OneTimeAccessCodeStatusTypesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "one_time_access_code_status_types". All fields are combined with a logical 'AND'. */
export type OneTimeAccessCodeStatusTypesBoolExp = {
  _and?: InputMaybe<Array<OneTimeAccessCodeStatusTypesBoolExp>>;
  _not?: InputMaybe<OneTimeAccessCodeStatusTypesBoolExp>;
  _or?: InputMaybe<Array<OneTimeAccessCodeStatusTypesBoolExp>>;
  comment?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "one_time_access_code_status_types" */
export enum OneTimeAccessCodeStatusTypesConstraint {
  /** unique or primary key constraint on columns "value" */
  ONE_TIME_ACCESS_CODE_STATUS_TYPES_PKEY = 'one_time_access_code_status_types_pkey'
}

export enum OneTimeAccessCodeStatusTypesEnum {
  /** Access code is currently active */
  ACTIVE = 'active',
  /** Access code has expired */
  EXPIRED = 'expired',
  /** Access code has been used */
  USED = 'used'
}

/** Boolean expression to compare columns of type "one_time_access_code_status_types_enum". All fields are combined with logical 'AND'. */
export type OneTimeAccessCodeStatusTypesEnumComparisonExp = {
  _eq?: InputMaybe<OneTimeAccessCodeStatusTypesEnum>;
  _in?: InputMaybe<Array<OneTimeAccessCodeStatusTypesEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<OneTimeAccessCodeStatusTypesEnum>;
  _nin?: InputMaybe<Array<OneTimeAccessCodeStatusTypesEnum>>;
};

/** input type for inserting data into table "one_time_access_code_status_types" */
export type OneTimeAccessCodeStatusTypesInsertInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type OneTimeAccessCodeStatusTypesMaxFields = {
  __typename?: 'one_time_access_code_status_types_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type OneTimeAccessCodeStatusTypesMinFields = {
  __typename?: 'one_time_access_code_status_types_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "one_time_access_code_status_types" */
export type OneTimeAccessCodeStatusTypesMutationResponse = {
  __typename?: 'one_time_access_code_status_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<OneTimeAccessCodeStatusTypes>;
};

/** on_conflict condition type for table "one_time_access_code_status_types" */
export type OneTimeAccessCodeStatusTypesOnConflict = {
  constraint: OneTimeAccessCodeStatusTypesConstraint;
  update_columns?: Array<OneTimeAccessCodeStatusTypesUpdateColumn>;
  where?: InputMaybe<OneTimeAccessCodeStatusTypesBoolExp>;
};

/** Ordering options when selecting data from "one_time_access_code_status_types". */
export type OneTimeAccessCodeStatusTypesOrderBy = {
  comment?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: one_time_access_code_status_types */
export type OneTimeAccessCodeStatusTypesPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "one_time_access_code_status_types" */
export enum OneTimeAccessCodeStatusTypesSelectColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  VALUE = 'value'
}

/** input type for updating data in table "one_time_access_code_status_types" */
export type OneTimeAccessCodeStatusTypesSetInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "one_time_access_code_status_types" */
export type OneTimeAccessCodeStatusTypesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: OneTimeAccessCodeStatusTypesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OneTimeAccessCodeStatusTypesStreamCursorValueInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "one_time_access_code_status_types" */
export enum OneTimeAccessCodeStatusTypesUpdateColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  VALUE = 'value'
}

export type OneTimeAccessCodeStatusTypesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OneTimeAccessCodeStatusTypesSetInput>;
  /** filter the rows which have to be updated */
  where: OneTimeAccessCodeStatusTypesBoolExp;
};

/** Streaming cursor of the table "one_time_access_code" */
export type OneTimeAccessCodeStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: OneTimeAccessCodeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OneTimeAccessCodeStreamCursorValueInput = {
  access_log_id?: InputMaybe<Scalars['uuid']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OneTimeAccessCodeStatusTypesEnum>;
  unit_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  valid_from?: InputMaybe<Scalars['timestamp']['input']>;
  valid_to?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "one_time_access_code" */
export enum OneTimeAccessCodeUpdateColumn {
  /** column name */
  ACCESS_LOG_ID = 'access_log_id',
  /** column name */
  CODE = 'code',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  PURPOSE = 'purpose',
  /** column name */
  STATUS = 'status',
  /** column name */
  UNIT_ID = 'unit_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  VALID_FROM = 'valid_from',
  /** column name */
  VALID_TO = 'valid_to'
}

export type OneTimeAccessCodeUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OneTimeAccessCodeSetInput>;
  /** filter the rows which have to be updated */
  where: OneTimeAccessCodeBoolExp;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = 'asc',
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = 'asc_nulls_first',
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = 'asc_nulls_last',
  /** in descending order, nulls first */
  DESC = 'desc',
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = 'desc_nulls_first',
  /** in descending order, nulls last */
  DESC_NULLS_LAST = 'desc_nulls_last'
}

/** columns and relationships of "organizations" */
export type Organizations = {
  __typename?: 'organizations';
  /** An array relationship */
  buildings: Array<Buildings>;
  /** An aggregate relationship */
  buildings_aggregate: BuildingsAggregate;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "organizations" */
export type OrganizationsBuildingsArgs = {
  distinct_on?: InputMaybe<Array<BuildingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BuildingsOrderBy>>;
  where?: InputMaybe<BuildingsBoolExp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsBuildingsAggregateArgs = {
  distinct_on?: InputMaybe<Array<BuildingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BuildingsOrderBy>>;
  where?: InputMaybe<BuildingsBoolExp>;
};

/** aggregated selection of "organizations" */
export type OrganizationsAggregate = {
  __typename?: 'organizations_aggregate';
  aggregate?: Maybe<OrganizationsAggregateFields>;
  nodes: Array<Organizations>;
};

/** aggregate fields of "organizations" */
export type OrganizationsAggregateFields = {
  __typename?: 'organizations_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<OrganizationsMaxFields>;
  min?: Maybe<OrganizationsMinFields>;
};


/** aggregate fields of "organizations" */
export type OrganizationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OrganizationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type OrganizationsBoolExp = {
  _and?: InputMaybe<Array<OrganizationsBoolExp>>;
  _not?: InputMaybe<OrganizationsBoolExp>;
  _or?: InputMaybe<Array<OrganizationsBoolExp>>;
  buildings?: InputMaybe<BuildingsBoolExp>;
  buildings_aggregate?: InputMaybe<BuildingsAggregateBoolExp>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "organizations" */
export enum OrganizationsConstraint {
  /** unique or primary key constraint on columns "id" */
  ORGANIZATIONS_PKEY = 'organizations_pkey'
}

/** input type for inserting data into table "organizations" */
export type OrganizationsInsertInput = {
  buildings?: InputMaybe<BuildingsArrRelInsertInput>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type OrganizationsMaxFields = {
  __typename?: 'organizations_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type OrganizationsMinFields = {
  __typename?: 'organizations_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "organizations" */
export type OrganizationsMutationResponse = {
  __typename?: 'organizations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organizations>;
};

/** input type for inserting object relation for remote table "organizations" */
export type OrganizationsObjRelInsertInput = {
  data: OrganizationsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<OrganizationsOnConflict>;
};

/** on_conflict condition type for table "organizations" */
export type OrganizationsOnConflict = {
  constraint: OrganizationsConstraint;
  update_columns?: Array<OrganizationsUpdateColumn>;
  where?: InputMaybe<OrganizationsBoolExp>;
};

/** Ordering options when selecting data from "organizations". */
export type OrganizationsOrderBy = {
  buildings_aggregate?: InputMaybe<BuildingsAggregateOrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: organizations */
export type OrganizationsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "organizations" */
export enum OrganizationsSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "organizations" */
export type OrganizationsSetInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "organizations" */
export type OrganizationsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: OrganizationsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OrganizationsStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "organizations" */
export enum OrganizationsUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATED_AT = 'updated_at'
}

export type OrganizationsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrganizationsSetInput>;
  /** filter the rows which have to be updated */
  where: OrganizationsBoolExp;
};

export type QueryRoot = {
  __typename?: 'query_root';
  /** An array relationship */
  access_logs: Array<AccessLogs>;
  /** An aggregate relationship */
  access_logs_aggregate: AccessLogsAggregate;
  /** fetch data from the table: "access_logs" using primary key columns */
  access_logs_by_pk?: Maybe<AccessLogs>;
  /** An array relationship */
  announcements: Array<Announcements>;
  /** An aggregate relationship */
  announcements_aggregate: AnnouncementsAggregate;
  /** fetch data from the table: "announcements" using primary key columns */
  announcements_by_pk?: Maybe<Announcements>;
  /** An array relationship */
  buildings: Array<Buildings>;
  /** An aggregate relationship */
  buildings_aggregate: BuildingsAggregate;
  /** fetch data from the table: "buildings" using primary key columns */
  buildings_by_pk?: Maybe<Buildings>;
  /** fetch data from the table: "call_status" */
  call_status: Array<CallStatus>;
  /** fetch aggregated fields from the table: "call_status" */
  call_status_aggregate: CallStatusAggregate;
  /** fetch data from the table: "call_status" using primary key columns */
  call_status_by_pk?: Maybe<CallStatus>;
  /** fetch data from the table: "call_types" */
  call_types: Array<CallTypes>;
  /** fetch aggregated fields from the table: "call_types" */
  call_types_aggregate: CallTypesAggregate;
  /** fetch data from the table: "call_types" using primary key columns */
  call_types_by_pk?: Maybe<CallTypes>;
  /** An array relationship */
  devices: Array<Devices>;
  /** An aggregate relationship */
  devices_aggregate: DevicesAggregate;
  /** fetch data from the table: "devices" using primary key columns */
  devices_by_pk?: Maybe<Devices>;
  /** fetch data from the table: "notification_types" */
  notification_types: Array<NotificationTypes>;
  /** fetch aggregated fields from the table: "notification_types" */
  notification_types_aggregate: NotificationTypesAggregate;
  /** fetch data from the table: "notification_types" using primary key columns */
  notification_types_by_pk?: Maybe<NotificationTypes>;
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: NotificationsAggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "one_time_access_code" */
  one_time_access_code: Array<OneTimeAccessCode>;
  /** fetch aggregated fields from the table: "one_time_access_code" */
  one_time_access_code_aggregate: OneTimeAccessCodeAggregate;
  /** fetch data from the table: "one_time_access_code" using primary key columns */
  one_time_access_code_by_pk?: Maybe<OneTimeAccessCode>;
  /** fetch data from the table: "one_time_access_code_status_types" */
  one_time_access_code_status_types: Array<OneTimeAccessCodeStatusTypes>;
  /** fetch aggregated fields from the table: "one_time_access_code_status_types" */
  one_time_access_code_status_types_aggregate: OneTimeAccessCodeStatusTypesAggregate;
  /** fetch data from the table: "one_time_access_code_status_types" using primary key columns */
  one_time_access_code_status_types_by_pk?: Maybe<OneTimeAccessCodeStatusTypes>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: OrganizationsAggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  requestSmsVerifCode: RequestSmsVerifCodeOutput;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: RolesAggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** An array relationship */
  settings: Array<Settings>;
  /** An aggregate relationship */
  settings_aggregate: SettingsAggregate;
  /** fetch data from the table: "settings" using primary key columns */
  settings_by_pk?: Maybe<Settings>;
  /** fetch data from the table: "two_fa_types" */
  two_fa_types: Array<TwoFaTypes>;
  /** fetch aggregated fields from the table: "two_fa_types" */
  two_fa_types_aggregate: TwoFaTypesAggregate;
  /** fetch data from the table: "two_fa_types" using primary key columns */
  two_fa_types_by_pk?: Maybe<TwoFaTypes>;
  /** An array relationship */
  units: Array<Units>;
  /** An aggregate relationship */
  units_aggregate: UnitsAggregate;
  /** fetch data from the table: "units" using primary key columns */
  units_by_pk?: Maybe<Units>;
  /** An array relationship */
  user_units: Array<UserUnits>;
  /** An aggregate relationship */
  user_units_aggregate: UserUnitsAggregate;
  /** fetch data from the table: "user_units" using primary key columns */
  user_units_by_pk?: Maybe<UserUnits>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type QueryRootAccessLogsArgs = {
  distinct_on?: InputMaybe<Array<AccessLogsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AccessLogsOrderBy>>;
  where?: InputMaybe<AccessLogsBoolExp>;
};


export type QueryRootAccessLogsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AccessLogsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AccessLogsOrderBy>>;
  where?: InputMaybe<AccessLogsBoolExp>;
};


export type QueryRootAccessLogsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootAnnouncementsArgs = {
  distinct_on?: InputMaybe<Array<AnnouncementsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AnnouncementsOrderBy>>;
  where?: InputMaybe<AnnouncementsBoolExp>;
};


export type QueryRootAnnouncementsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AnnouncementsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AnnouncementsOrderBy>>;
  where?: InputMaybe<AnnouncementsBoolExp>;
};


export type QueryRootAnnouncementsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootBuildingsArgs = {
  distinct_on?: InputMaybe<Array<BuildingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BuildingsOrderBy>>;
  where?: InputMaybe<BuildingsBoolExp>;
};


export type QueryRootBuildingsAggregateArgs = {
  distinct_on?: InputMaybe<Array<BuildingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BuildingsOrderBy>>;
  where?: InputMaybe<BuildingsBoolExp>;
};


export type QueryRootBuildingsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootCallStatusArgs = {
  distinct_on?: InputMaybe<Array<CallStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CallStatusOrderBy>>;
  where?: InputMaybe<CallStatusBoolExp>;
};


export type QueryRootCallStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<CallStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CallStatusOrderBy>>;
  where?: InputMaybe<CallStatusBoolExp>;
};


export type QueryRootCallStatusByPkArgs = {
  value: Scalars['String']['input'];
};


export type QueryRootCallTypesArgs = {
  distinct_on?: InputMaybe<Array<CallTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CallTypesOrderBy>>;
  where?: InputMaybe<CallTypesBoolExp>;
};


export type QueryRootCallTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CallTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CallTypesOrderBy>>;
  where?: InputMaybe<CallTypesBoolExp>;
};


export type QueryRootCallTypesByPkArgs = {
  value: Scalars['String']['input'];
};


export type QueryRootDevicesArgs = {
  distinct_on?: InputMaybe<Array<DevicesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DevicesOrderBy>>;
  where?: InputMaybe<DevicesBoolExp>;
};


export type QueryRootDevicesAggregateArgs = {
  distinct_on?: InputMaybe<Array<DevicesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DevicesOrderBy>>;
  where?: InputMaybe<DevicesBoolExp>;
};


export type QueryRootDevicesByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootNotificationTypesArgs = {
  distinct_on?: InputMaybe<Array<NotificationTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTypesOrderBy>>;
  where?: InputMaybe<NotificationTypesBoolExp>;
};


export type QueryRootNotificationTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTypesOrderBy>>;
  where?: InputMaybe<NotificationTypesBoolExp>;
};


export type QueryRootNotificationTypesByPkArgs = {
  value: Scalars['String']['input'];
};


export type QueryRootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<NotificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationsOrderBy>>;
  where?: InputMaybe<NotificationsBoolExp>;
};


export type QueryRootNotificationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationsOrderBy>>;
  where?: InputMaybe<NotificationsBoolExp>;
};


export type QueryRootNotificationsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootOneTimeAccessCodeArgs = {
  distinct_on?: InputMaybe<Array<OneTimeAccessCodeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OneTimeAccessCodeOrderBy>>;
  where?: InputMaybe<OneTimeAccessCodeBoolExp>;
};


export type QueryRootOneTimeAccessCodeAggregateArgs = {
  distinct_on?: InputMaybe<Array<OneTimeAccessCodeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OneTimeAccessCodeOrderBy>>;
  where?: InputMaybe<OneTimeAccessCodeBoolExp>;
};


export type QueryRootOneTimeAccessCodeByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootOneTimeAccessCodeStatusTypesArgs = {
  distinct_on?: InputMaybe<Array<OneTimeAccessCodeStatusTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OneTimeAccessCodeStatusTypesOrderBy>>;
  where?: InputMaybe<OneTimeAccessCodeStatusTypesBoolExp>;
};


export type QueryRootOneTimeAccessCodeStatusTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<OneTimeAccessCodeStatusTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OneTimeAccessCodeStatusTypesOrderBy>>;
  where?: InputMaybe<OneTimeAccessCodeStatusTypesBoolExp>;
};


export type QueryRootOneTimeAccessCodeStatusTypesByPkArgs = {
  value: Scalars['String']['input'];
};


export type QueryRootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OrganizationsOrderBy>>;
  where?: InputMaybe<OrganizationsBoolExp>;
};


export type QueryRootOrganizationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OrganizationsOrderBy>>;
  where?: InputMaybe<OrganizationsBoolExp>;
};


export type QueryRootOrganizationsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootRequestSmsVerifCodeArgs = {
  requestSmsVerifCodeData: RequestSmsVerifCodeInput;
};


export type QueryRootRolesArgs = {
  distinct_on?: InputMaybe<Array<RolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RolesOrderBy>>;
  where?: InputMaybe<RolesBoolExp>;
};


export type QueryRootRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<RolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RolesOrderBy>>;
  where?: InputMaybe<RolesBoolExp>;
};


export type QueryRootRolesByPkArgs = {
  value: Scalars['String']['input'];
};


export type QueryRootSettingsArgs = {
  distinct_on?: InputMaybe<Array<SettingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SettingsOrderBy>>;
  where?: InputMaybe<SettingsBoolExp>;
};


export type QueryRootSettingsAggregateArgs = {
  distinct_on?: InputMaybe<Array<SettingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SettingsOrderBy>>;
  where?: InputMaybe<SettingsBoolExp>;
};


export type QueryRootSettingsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootTwoFaTypesArgs = {
  distinct_on?: InputMaybe<Array<TwoFaTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TwoFaTypesOrderBy>>;
  where?: InputMaybe<TwoFaTypesBoolExp>;
};


export type QueryRootTwoFaTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TwoFaTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TwoFaTypesOrderBy>>;
  where?: InputMaybe<TwoFaTypesBoolExp>;
};


export type QueryRootTwoFaTypesByPkArgs = {
  value: Scalars['String']['input'];
};


export type QueryRootUnitsArgs = {
  distinct_on?: InputMaybe<Array<UnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UnitsOrderBy>>;
  where?: InputMaybe<UnitsBoolExp>;
};


export type QueryRootUnitsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UnitsOrderBy>>;
  where?: InputMaybe<UnitsBoolExp>;
};


export type QueryRootUnitsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootUserUnitsArgs = {
  distinct_on?: InputMaybe<Array<UserUnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserUnitsOrderBy>>;
  where?: InputMaybe<UserUnitsBoolExp>;
};


export type QueryRootUserUnitsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserUnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserUnitsOrderBy>>;
  where?: InputMaybe<UserUnitsBoolExp>;
};


export type QueryRootUserUnitsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersByPkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  comment: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "roles" */
export type RolesAggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<RolesAggregateFields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type RolesAggregateFields = {
  __typename?: 'roles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<RolesMaxFields>;
  min?: Maybe<RolesMinFields>;
};


/** aggregate fields of "roles" */
export type RolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type RolesBoolExp = {
  _and?: InputMaybe<Array<RolesBoolExp>>;
  _not?: InputMaybe<RolesBoolExp>;
  _or?: InputMaybe<Array<RolesBoolExp>>;
  comment?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "roles" */
export enum RolesConstraint {
  /** unique or primary key constraint on columns "value" */
  ROLES_PKEY = 'roles_pkey'
}

export enum RolesEnum {
  /** A user with administrative privileges */
  ADMIN = 'admin',
  /** A user who resides in the building */
  RESIDENT = 'resident',
  /** A temporary user or guest for tablet in kiosk mode */
  VISITOR = 'visitor'
}

/** Boolean expression to compare columns of type "roles_enum". All fields are combined with logical 'AND'. */
export type RolesEnumComparisonExp = {
  _eq?: InputMaybe<RolesEnum>;
  _in?: InputMaybe<Array<RolesEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<RolesEnum>;
  _nin?: InputMaybe<Array<RolesEnum>>;
};

/** input type for inserting data into table "roles" */
export type RolesInsertInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type RolesMaxFields = {
  __typename?: 'roles_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type RolesMinFields = {
  __typename?: 'roles_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "roles" */
export type RolesMutationResponse = {
  __typename?: 'roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles>;
};

/** on_conflict condition type for table "roles" */
export type RolesOnConflict = {
  constraint: RolesConstraint;
  update_columns?: Array<RolesUpdateColumn>;
  where?: InputMaybe<RolesBoolExp>;
};

/** Ordering options when selecting data from "roles". */
export type RolesOrderBy = {
  comment?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: roles */
export type RolesPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "roles" */
export enum RolesSelectColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  VALUE = 'value'
}

/** input type for updating data in table "roles" */
export type RolesSetInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "roles" */
export type RolesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: RolesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RolesStreamCursorValueInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "roles" */
export enum RolesUpdateColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  VALUE = 'value'
}

export type RolesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RolesSetInput>;
  /** filter the rows which have to be updated */
  where: RolesBoolExp;
};

/** columns and relationships of "settings" */
export type Settings = {
  __typename?: 'settings';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  two_fa_type: TwoFaTypesEnum;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "settings" */
export type SettingsAggregate = {
  __typename?: 'settings_aggregate';
  aggregate?: Maybe<SettingsAggregateFields>;
  nodes: Array<Settings>;
};

export type SettingsAggregateBoolExp = {
  count?: InputMaybe<SettingsAggregateBoolExpCount>;
};

export type SettingsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<SettingsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<SettingsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "settings" */
export type SettingsAggregateFields = {
  __typename?: 'settings_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<SettingsMaxFields>;
  min?: Maybe<SettingsMinFields>;
};


/** aggregate fields of "settings" */
export type SettingsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<SettingsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "settings" */
export type SettingsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<SettingsMaxOrderBy>;
  min?: InputMaybe<SettingsMinOrderBy>;
};

/** input type for inserting array relation for remote table "settings" */
export type SettingsArrRelInsertInput = {
  data: Array<SettingsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<SettingsOnConflict>;
};

/** Boolean expression to filter rows from the table "settings". All fields are combined with a logical 'AND'. */
export type SettingsBoolExp = {
  _and?: InputMaybe<Array<SettingsBoolExp>>;
  _not?: InputMaybe<SettingsBoolExp>;
  _or?: InputMaybe<Array<SettingsBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  two_fa_type?: InputMaybe<TwoFaTypesEnumComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "settings" */
export enum SettingsConstraint {
  /** unique or primary key constraint on columns "id" */
  SETTINGS_PKEY = 'settings_pkey'
}

/** input type for inserting data into table "settings" */
export type SettingsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  two_fa_type?: InputMaybe<TwoFaTypesEnum>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type SettingsMaxFields = {
  __typename?: 'settings_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "settings" */
export type SettingsMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type SettingsMinFields = {
  __typename?: 'settings_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "settings" */
export type SettingsMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "settings" */
export type SettingsMutationResponse = {
  __typename?: 'settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Settings>;
};

/** on_conflict condition type for table "settings" */
export type SettingsOnConflict = {
  constraint: SettingsConstraint;
  update_columns?: Array<SettingsUpdateColumn>;
  where?: InputMaybe<SettingsBoolExp>;
};

/** Ordering options when selecting data from "settings". */
export type SettingsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  two_fa_type?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: settings */
export type SettingsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "settings" */
export enum SettingsSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  TWO_FA_TYPE = 'two_fa_type',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "settings" */
export type SettingsSetInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  two_fa_type?: InputMaybe<TwoFaTypesEnum>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "settings" */
export type SettingsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: SettingsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SettingsStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  two_fa_type?: InputMaybe<TwoFaTypesEnum>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "settings" */
export enum SettingsUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  TWO_FA_TYPE = 'two_fa_type',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

export type SettingsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SettingsSetInput>;
  /** filter the rows which have to be updated */
  where: SettingsBoolExp;
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** An array relationship */
  access_logs: Array<AccessLogs>;
  /** An aggregate relationship */
  access_logs_aggregate: AccessLogsAggregate;
  /** fetch data from the table: "access_logs" using primary key columns */
  access_logs_by_pk?: Maybe<AccessLogs>;
  /** fetch data from the table in a streaming manner: "access_logs" */
  access_logs_stream: Array<AccessLogs>;
  /** An array relationship */
  announcements: Array<Announcements>;
  /** An aggregate relationship */
  announcements_aggregate: AnnouncementsAggregate;
  /** fetch data from the table: "announcements" using primary key columns */
  announcements_by_pk?: Maybe<Announcements>;
  /** fetch data from the table in a streaming manner: "announcements" */
  announcements_stream: Array<Announcements>;
  /** An array relationship */
  buildings: Array<Buildings>;
  /** An aggregate relationship */
  buildings_aggregate: BuildingsAggregate;
  /** fetch data from the table: "buildings" using primary key columns */
  buildings_by_pk?: Maybe<Buildings>;
  /** fetch data from the table in a streaming manner: "buildings" */
  buildings_stream: Array<Buildings>;
  /** fetch data from the table: "call_status" */
  call_status: Array<CallStatus>;
  /** fetch aggregated fields from the table: "call_status" */
  call_status_aggregate: CallStatusAggregate;
  /** fetch data from the table: "call_status" using primary key columns */
  call_status_by_pk?: Maybe<CallStatus>;
  /** fetch data from the table in a streaming manner: "call_status" */
  call_status_stream: Array<CallStatus>;
  /** fetch data from the table: "call_types" */
  call_types: Array<CallTypes>;
  /** fetch aggregated fields from the table: "call_types" */
  call_types_aggregate: CallTypesAggregate;
  /** fetch data from the table: "call_types" using primary key columns */
  call_types_by_pk?: Maybe<CallTypes>;
  /** fetch data from the table in a streaming manner: "call_types" */
  call_types_stream: Array<CallTypes>;
  /** An array relationship */
  devices: Array<Devices>;
  /** An aggregate relationship */
  devices_aggregate: DevicesAggregate;
  /** fetch data from the table: "devices" using primary key columns */
  devices_by_pk?: Maybe<Devices>;
  /** fetch data from the table in a streaming manner: "devices" */
  devices_stream: Array<Devices>;
  /** fetch data from the table: "notification_types" */
  notification_types: Array<NotificationTypes>;
  /** fetch aggregated fields from the table: "notification_types" */
  notification_types_aggregate: NotificationTypesAggregate;
  /** fetch data from the table: "notification_types" using primary key columns */
  notification_types_by_pk?: Maybe<NotificationTypes>;
  /** fetch data from the table in a streaming manner: "notification_types" */
  notification_types_stream: Array<NotificationTypes>;
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: NotificationsAggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table in a streaming manner: "notifications" */
  notifications_stream: Array<Notifications>;
  /** fetch data from the table: "one_time_access_code" */
  one_time_access_code: Array<OneTimeAccessCode>;
  /** fetch aggregated fields from the table: "one_time_access_code" */
  one_time_access_code_aggregate: OneTimeAccessCodeAggregate;
  /** fetch data from the table: "one_time_access_code" using primary key columns */
  one_time_access_code_by_pk?: Maybe<OneTimeAccessCode>;
  /** fetch data from the table: "one_time_access_code_status_types" */
  one_time_access_code_status_types: Array<OneTimeAccessCodeStatusTypes>;
  /** fetch aggregated fields from the table: "one_time_access_code_status_types" */
  one_time_access_code_status_types_aggregate: OneTimeAccessCodeStatusTypesAggregate;
  /** fetch data from the table: "one_time_access_code_status_types" using primary key columns */
  one_time_access_code_status_types_by_pk?: Maybe<OneTimeAccessCodeStatusTypes>;
  /** fetch data from the table in a streaming manner: "one_time_access_code_status_types" */
  one_time_access_code_status_types_stream: Array<OneTimeAccessCodeStatusTypes>;
  /** fetch data from the table in a streaming manner: "one_time_access_code" */
  one_time_access_code_stream: Array<OneTimeAccessCode>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: OrganizationsAggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table in a streaming manner: "organizations" */
  organizations_stream: Array<Organizations>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: RolesAggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table in a streaming manner: "roles" */
  roles_stream: Array<Roles>;
  /** An array relationship */
  settings: Array<Settings>;
  /** An aggregate relationship */
  settings_aggregate: SettingsAggregate;
  /** fetch data from the table: "settings" using primary key columns */
  settings_by_pk?: Maybe<Settings>;
  /** fetch data from the table in a streaming manner: "settings" */
  settings_stream: Array<Settings>;
  /** fetch data from the table: "two_fa_types" */
  two_fa_types: Array<TwoFaTypes>;
  /** fetch aggregated fields from the table: "two_fa_types" */
  two_fa_types_aggregate: TwoFaTypesAggregate;
  /** fetch data from the table: "two_fa_types" using primary key columns */
  two_fa_types_by_pk?: Maybe<TwoFaTypes>;
  /** fetch data from the table in a streaming manner: "two_fa_types" */
  two_fa_types_stream: Array<TwoFaTypes>;
  /** An array relationship */
  units: Array<Units>;
  /** An aggregate relationship */
  units_aggregate: UnitsAggregate;
  /** fetch data from the table: "units" using primary key columns */
  units_by_pk?: Maybe<Units>;
  /** fetch data from the table in a streaming manner: "units" */
  units_stream: Array<Units>;
  /** An array relationship */
  user_units: Array<UserUnits>;
  /** An aggregate relationship */
  user_units_aggregate: UserUnitsAggregate;
  /** fetch data from the table: "user_units" using primary key columns */
  user_units_by_pk?: Maybe<UserUnits>;
  /** fetch data from the table in a streaming manner: "user_units" */
  user_units_stream: Array<UserUnits>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type SubscriptionRootAccessLogsArgs = {
  distinct_on?: InputMaybe<Array<AccessLogsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AccessLogsOrderBy>>;
  where?: InputMaybe<AccessLogsBoolExp>;
};


export type SubscriptionRootAccessLogsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AccessLogsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AccessLogsOrderBy>>;
  where?: InputMaybe<AccessLogsBoolExp>;
};


export type SubscriptionRootAccessLogsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootAccessLogsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AccessLogsStreamCursorInput>>;
  where?: InputMaybe<AccessLogsBoolExp>;
};


export type SubscriptionRootAnnouncementsArgs = {
  distinct_on?: InputMaybe<Array<AnnouncementsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AnnouncementsOrderBy>>;
  where?: InputMaybe<AnnouncementsBoolExp>;
};


export type SubscriptionRootAnnouncementsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AnnouncementsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AnnouncementsOrderBy>>;
  where?: InputMaybe<AnnouncementsBoolExp>;
};


export type SubscriptionRootAnnouncementsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootAnnouncementsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AnnouncementsStreamCursorInput>>;
  where?: InputMaybe<AnnouncementsBoolExp>;
};


export type SubscriptionRootBuildingsArgs = {
  distinct_on?: InputMaybe<Array<BuildingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BuildingsOrderBy>>;
  where?: InputMaybe<BuildingsBoolExp>;
};


export type SubscriptionRootBuildingsAggregateArgs = {
  distinct_on?: InputMaybe<Array<BuildingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<BuildingsOrderBy>>;
  where?: InputMaybe<BuildingsBoolExp>;
};


export type SubscriptionRootBuildingsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootBuildingsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<BuildingsStreamCursorInput>>;
  where?: InputMaybe<BuildingsBoolExp>;
};


export type SubscriptionRootCallStatusArgs = {
  distinct_on?: InputMaybe<Array<CallStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CallStatusOrderBy>>;
  where?: InputMaybe<CallStatusBoolExp>;
};


export type SubscriptionRootCallStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<CallStatusSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CallStatusOrderBy>>;
  where?: InputMaybe<CallStatusBoolExp>;
};


export type SubscriptionRootCallStatusByPkArgs = {
  value: Scalars['String']['input'];
};


export type SubscriptionRootCallStatusStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CallStatusStreamCursorInput>>;
  where?: InputMaybe<CallStatusBoolExp>;
};


export type SubscriptionRootCallTypesArgs = {
  distinct_on?: InputMaybe<Array<CallTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CallTypesOrderBy>>;
  where?: InputMaybe<CallTypesBoolExp>;
};


export type SubscriptionRootCallTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CallTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CallTypesOrderBy>>;
  where?: InputMaybe<CallTypesBoolExp>;
};


export type SubscriptionRootCallTypesByPkArgs = {
  value: Scalars['String']['input'];
};


export type SubscriptionRootCallTypesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CallTypesStreamCursorInput>>;
  where?: InputMaybe<CallTypesBoolExp>;
};


export type SubscriptionRootDevicesArgs = {
  distinct_on?: InputMaybe<Array<DevicesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DevicesOrderBy>>;
  where?: InputMaybe<DevicesBoolExp>;
};


export type SubscriptionRootDevicesAggregateArgs = {
  distinct_on?: InputMaybe<Array<DevicesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<DevicesOrderBy>>;
  where?: InputMaybe<DevicesBoolExp>;
};


export type SubscriptionRootDevicesByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootDevicesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DevicesStreamCursorInput>>;
  where?: InputMaybe<DevicesBoolExp>;
};


export type SubscriptionRootNotificationTypesArgs = {
  distinct_on?: InputMaybe<Array<NotificationTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTypesOrderBy>>;
  where?: InputMaybe<NotificationTypesBoolExp>;
};


export type SubscriptionRootNotificationTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationTypesOrderBy>>;
  where?: InputMaybe<NotificationTypesBoolExp>;
};


export type SubscriptionRootNotificationTypesByPkArgs = {
  value: Scalars['String']['input'];
};


export type SubscriptionRootNotificationTypesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<NotificationTypesStreamCursorInput>>;
  where?: InputMaybe<NotificationTypesBoolExp>;
};


export type SubscriptionRootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<NotificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationsOrderBy>>;
  where?: InputMaybe<NotificationsBoolExp>;
};


export type SubscriptionRootNotificationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<NotificationsOrderBy>>;
  where?: InputMaybe<NotificationsBoolExp>;
};


export type SubscriptionRootNotificationsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootNotificationsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<NotificationsStreamCursorInput>>;
  where?: InputMaybe<NotificationsBoolExp>;
};


export type SubscriptionRootOneTimeAccessCodeArgs = {
  distinct_on?: InputMaybe<Array<OneTimeAccessCodeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OneTimeAccessCodeOrderBy>>;
  where?: InputMaybe<OneTimeAccessCodeBoolExp>;
};


export type SubscriptionRootOneTimeAccessCodeAggregateArgs = {
  distinct_on?: InputMaybe<Array<OneTimeAccessCodeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OneTimeAccessCodeOrderBy>>;
  where?: InputMaybe<OneTimeAccessCodeBoolExp>;
};


export type SubscriptionRootOneTimeAccessCodeByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootOneTimeAccessCodeStatusTypesArgs = {
  distinct_on?: InputMaybe<Array<OneTimeAccessCodeStatusTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OneTimeAccessCodeStatusTypesOrderBy>>;
  where?: InputMaybe<OneTimeAccessCodeStatusTypesBoolExp>;
};


export type SubscriptionRootOneTimeAccessCodeStatusTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<OneTimeAccessCodeStatusTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OneTimeAccessCodeStatusTypesOrderBy>>;
  where?: InputMaybe<OneTimeAccessCodeStatusTypesBoolExp>;
};


export type SubscriptionRootOneTimeAccessCodeStatusTypesByPkArgs = {
  value: Scalars['String']['input'];
};


export type SubscriptionRootOneTimeAccessCodeStatusTypesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OneTimeAccessCodeStatusTypesStreamCursorInput>>;
  where?: InputMaybe<OneTimeAccessCodeStatusTypesBoolExp>;
};


export type SubscriptionRootOneTimeAccessCodeStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OneTimeAccessCodeStreamCursorInput>>;
  where?: InputMaybe<OneTimeAccessCodeBoolExp>;
};


export type SubscriptionRootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OrganizationsOrderBy>>;
  where?: InputMaybe<OrganizationsBoolExp>;
};


export type SubscriptionRootOrganizationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OrganizationsOrderBy>>;
  where?: InputMaybe<OrganizationsBoolExp>;
};


export type SubscriptionRootOrganizationsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootOrganizationsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<OrganizationsStreamCursorInput>>;
  where?: InputMaybe<OrganizationsBoolExp>;
};


export type SubscriptionRootRolesArgs = {
  distinct_on?: InputMaybe<Array<RolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RolesOrderBy>>;
  where?: InputMaybe<RolesBoolExp>;
};


export type SubscriptionRootRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<RolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RolesOrderBy>>;
  where?: InputMaybe<RolesBoolExp>;
};


export type SubscriptionRootRolesByPkArgs = {
  value: Scalars['String']['input'];
};


export type SubscriptionRootRolesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<RolesStreamCursorInput>>;
  where?: InputMaybe<RolesBoolExp>;
};


export type SubscriptionRootSettingsArgs = {
  distinct_on?: InputMaybe<Array<SettingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SettingsOrderBy>>;
  where?: InputMaybe<SettingsBoolExp>;
};


export type SubscriptionRootSettingsAggregateArgs = {
  distinct_on?: InputMaybe<Array<SettingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SettingsOrderBy>>;
  where?: InputMaybe<SettingsBoolExp>;
};


export type SubscriptionRootSettingsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootSettingsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<SettingsStreamCursorInput>>;
  where?: InputMaybe<SettingsBoolExp>;
};


export type SubscriptionRootTwoFaTypesArgs = {
  distinct_on?: InputMaybe<Array<TwoFaTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TwoFaTypesOrderBy>>;
  where?: InputMaybe<TwoFaTypesBoolExp>;
};


export type SubscriptionRootTwoFaTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TwoFaTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TwoFaTypesOrderBy>>;
  where?: InputMaybe<TwoFaTypesBoolExp>;
};


export type SubscriptionRootTwoFaTypesByPkArgs = {
  value: Scalars['String']['input'];
};


export type SubscriptionRootTwoFaTypesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TwoFaTypesStreamCursorInput>>;
  where?: InputMaybe<TwoFaTypesBoolExp>;
};


export type SubscriptionRootUnitsArgs = {
  distinct_on?: InputMaybe<Array<UnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UnitsOrderBy>>;
  where?: InputMaybe<UnitsBoolExp>;
};


export type SubscriptionRootUnitsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UnitsOrderBy>>;
  where?: InputMaybe<UnitsBoolExp>;
};


export type SubscriptionRootUnitsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootUnitsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UnitsStreamCursorInput>>;
  where?: InputMaybe<UnitsBoolExp>;
};


export type SubscriptionRootUserUnitsArgs = {
  distinct_on?: InputMaybe<Array<UserUnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserUnitsOrderBy>>;
  where?: InputMaybe<UserUnitsBoolExp>;
};


export type SubscriptionRootUserUnitsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserUnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserUnitsOrderBy>>;
  where?: InputMaybe<UserUnitsBoolExp>;
};


export type SubscriptionRootUserUnitsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootUserUnitsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserUnitsStreamCursorInput>>;
  where?: InputMaybe<UserUnitsBoolExp>;
};


export type SubscriptionRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootUsersStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UsersStreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** columns and relationships of "two_fa_types" */
export type TwoFaTypes = {
  __typename?: 'two_fa_types';
  comment: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "two_fa_types" */
export type TwoFaTypesAggregate = {
  __typename?: 'two_fa_types_aggregate';
  aggregate?: Maybe<TwoFaTypesAggregateFields>;
  nodes: Array<TwoFaTypes>;
};

/** aggregate fields of "two_fa_types" */
export type TwoFaTypesAggregateFields = {
  __typename?: 'two_fa_types_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<TwoFaTypesMaxFields>;
  min?: Maybe<TwoFaTypesMinFields>;
};


/** aggregate fields of "two_fa_types" */
export type TwoFaTypesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TwoFaTypesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "two_fa_types". All fields are combined with a logical 'AND'. */
export type TwoFaTypesBoolExp = {
  _and?: InputMaybe<Array<TwoFaTypesBoolExp>>;
  _not?: InputMaybe<TwoFaTypesBoolExp>;
  _or?: InputMaybe<Array<TwoFaTypesBoolExp>>;
  comment?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "two_fa_types" */
export enum TwoFaTypesConstraint {
  /** unique or primary key constraint on columns "value" */
  TWO_FA_TYPES_PKEY = 'two_fa_types_pkey'
}

export enum TwoFaTypesEnum {
  /** Two-factor authentication via authenticator app */
  AUTH_APP = 'auth_app',
  /** Two-factor authentication is disabled */
  DISABLED = 'disabled',
  /** Two-factor authentication via email */
  EMAIL = 'email',
  /** Two-factor authentication via phone */
  PHONE = 'phone'
}

/** Boolean expression to compare columns of type "two_fa_types_enum". All fields are combined with logical 'AND'. */
export type TwoFaTypesEnumComparisonExp = {
  _eq?: InputMaybe<TwoFaTypesEnum>;
  _in?: InputMaybe<Array<TwoFaTypesEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<TwoFaTypesEnum>;
  _nin?: InputMaybe<Array<TwoFaTypesEnum>>;
};

/** input type for inserting data into table "two_fa_types" */
export type TwoFaTypesInsertInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type TwoFaTypesMaxFields = {
  __typename?: 'two_fa_types_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type TwoFaTypesMinFields = {
  __typename?: 'two_fa_types_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "two_fa_types" */
export type TwoFaTypesMutationResponse = {
  __typename?: 'two_fa_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<TwoFaTypes>;
};

/** on_conflict condition type for table "two_fa_types" */
export type TwoFaTypesOnConflict = {
  constraint: TwoFaTypesConstraint;
  update_columns?: Array<TwoFaTypesUpdateColumn>;
  where?: InputMaybe<TwoFaTypesBoolExp>;
};

/** Ordering options when selecting data from "two_fa_types". */
export type TwoFaTypesOrderBy = {
  comment?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: two_fa_types */
export type TwoFaTypesPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "two_fa_types" */
export enum TwoFaTypesSelectColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  VALUE = 'value'
}

/** input type for updating data in table "two_fa_types" */
export type TwoFaTypesSetInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "two_fa_types" */
export type TwoFaTypesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: TwoFaTypesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TwoFaTypesStreamCursorValueInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "two_fa_types" */
export enum TwoFaTypesUpdateColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  VALUE = 'value'
}

export type TwoFaTypesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TwoFaTypesSetInput>;
  /** filter the rows which have to be updated */
  where: TwoFaTypesBoolExp;
};

/** columns and relationships of "units" */
export type Units = {
  __typename?: 'units';
  /** An array relationship */
  access_logs: Array<AccessLogs>;
  /** An aggregate relationship */
  access_logs_aggregate: AccessLogsAggregate;
  /** An object relationship */
  building: Buildings;
  building_id: Scalars['uuid']['output'];
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  number: Scalars['Int']['output'];
  /** An array relationship */
  one_time_access_codes: Array<OneTimeAccessCode>;
  /** An aggregate relationship */
  one_time_access_codes_aggregate: OneTimeAccessCodeAggregate;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  user_units: Array<UserUnits>;
  /** An aggregate relationship */
  user_units_aggregate: UserUnitsAggregate;
};


/** columns and relationships of "units" */
export type UnitsAccessLogsArgs = {
  distinct_on?: InputMaybe<Array<AccessLogsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AccessLogsOrderBy>>;
  where?: InputMaybe<AccessLogsBoolExp>;
};


/** columns and relationships of "units" */
export type UnitsAccessLogsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AccessLogsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AccessLogsOrderBy>>;
  where?: InputMaybe<AccessLogsBoolExp>;
};


/** columns and relationships of "units" */
export type UnitsOneTimeAccessCodesArgs = {
  distinct_on?: InputMaybe<Array<OneTimeAccessCodeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OneTimeAccessCodeOrderBy>>;
  where?: InputMaybe<OneTimeAccessCodeBoolExp>;
};


/** columns and relationships of "units" */
export type UnitsOneTimeAccessCodesAggregateArgs = {
  distinct_on?: InputMaybe<Array<OneTimeAccessCodeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<OneTimeAccessCodeOrderBy>>;
  where?: InputMaybe<OneTimeAccessCodeBoolExp>;
};


/** columns and relationships of "units" */
export type UnitsUserUnitsArgs = {
  distinct_on?: InputMaybe<Array<UserUnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserUnitsOrderBy>>;
  where?: InputMaybe<UserUnitsBoolExp>;
};


/** columns and relationships of "units" */
export type UnitsUserUnitsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserUnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserUnitsOrderBy>>;
  where?: InputMaybe<UserUnitsBoolExp>;
};

/** aggregated selection of "units" */
export type UnitsAggregate = {
  __typename?: 'units_aggregate';
  aggregate?: Maybe<UnitsAggregateFields>;
  nodes: Array<Units>;
};

export type UnitsAggregateBoolExp = {
  count?: InputMaybe<UnitsAggregateBoolExpCount>;
};

export type UnitsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UnitsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UnitsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "units" */
export type UnitsAggregateFields = {
  __typename?: 'units_aggregate_fields';
  avg?: Maybe<UnitsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<UnitsMaxFields>;
  min?: Maybe<UnitsMinFields>;
  stddev?: Maybe<UnitsStddevFields>;
  stddev_pop?: Maybe<UnitsStddevPopFields>;
  stddev_samp?: Maybe<UnitsStddevSampFields>;
  sum?: Maybe<UnitsSumFields>;
  var_pop?: Maybe<UnitsVarPopFields>;
  var_samp?: Maybe<UnitsVarSampFields>;
  variance?: Maybe<UnitsVarianceFields>;
};


/** aggregate fields of "units" */
export type UnitsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UnitsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "units" */
export type UnitsAggregateOrderBy = {
  avg?: InputMaybe<UnitsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UnitsMaxOrderBy>;
  min?: InputMaybe<UnitsMinOrderBy>;
  stddev?: InputMaybe<UnitsStddevOrderBy>;
  stddev_pop?: InputMaybe<UnitsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<UnitsStddevSampOrderBy>;
  sum?: InputMaybe<UnitsSumOrderBy>;
  var_pop?: InputMaybe<UnitsVarPopOrderBy>;
  var_samp?: InputMaybe<UnitsVarSampOrderBy>;
  variance?: InputMaybe<UnitsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "units" */
export type UnitsArrRelInsertInput = {
  data: Array<UnitsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<UnitsOnConflict>;
};

/** aggregate avg on columns */
export type UnitsAvgFields = {
  __typename?: 'units_avg_fields';
  number?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "units" */
export type UnitsAvgOrderBy = {
  number?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "units". All fields are combined with a logical 'AND'. */
export type UnitsBoolExp = {
  _and?: InputMaybe<Array<UnitsBoolExp>>;
  _not?: InputMaybe<UnitsBoolExp>;
  _or?: InputMaybe<Array<UnitsBoolExp>>;
  access_logs?: InputMaybe<AccessLogsBoolExp>;
  access_logs_aggregate?: InputMaybe<AccessLogsAggregateBoolExp>;
  building?: InputMaybe<BuildingsBoolExp>;
  building_id?: InputMaybe<UuidComparisonExp>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  number?: InputMaybe<IntComparisonExp>;
  one_time_access_codes?: InputMaybe<OneTimeAccessCodeBoolExp>;
  one_time_access_codes_aggregate?: InputMaybe<OneTimeAccessCodeAggregateBoolExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user_units?: InputMaybe<UserUnitsBoolExp>;
  user_units_aggregate?: InputMaybe<UserUnitsAggregateBoolExp>;
};

/** unique or primary key constraints on table "units" */
export enum UnitsConstraint {
  /** unique or primary key constraint on columns "id" */
  UNITS_PKEY = 'units_pkey'
}

/** input type for incrementing numeric columns in table "units" */
export type UnitsIncInput = {
  number?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "units" */
export type UnitsInsertInput = {
  access_logs?: InputMaybe<AccessLogsArrRelInsertInput>;
  building?: InputMaybe<BuildingsObjRelInsertInput>;
  building_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  one_time_access_codes?: InputMaybe<OneTimeAccessCodeArrRelInsertInput>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_units?: InputMaybe<UserUnitsArrRelInsertInput>;
};

/** aggregate max on columns */
export type UnitsMaxFields = {
  __typename?: 'units_max_fields';
  building_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "units" */
export type UnitsMaxOrderBy = {
  building_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  number?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UnitsMinFields = {
  __typename?: 'units_min_fields';
  building_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "units" */
export type UnitsMinOrderBy = {
  building_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  number?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "units" */
export type UnitsMutationResponse = {
  __typename?: 'units_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Units>;
};

/** input type for inserting object relation for remote table "units" */
export type UnitsObjRelInsertInput = {
  data: UnitsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<UnitsOnConflict>;
};

/** on_conflict condition type for table "units" */
export type UnitsOnConflict = {
  constraint: UnitsConstraint;
  update_columns?: Array<UnitsUpdateColumn>;
  where?: InputMaybe<UnitsBoolExp>;
};

/** Ordering options when selecting data from "units". */
export type UnitsOrderBy = {
  access_logs_aggregate?: InputMaybe<AccessLogsAggregateOrderBy>;
  building?: InputMaybe<BuildingsOrderBy>;
  building_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  number?: InputMaybe<OrderBy>;
  one_time_access_codes_aggregate?: InputMaybe<OneTimeAccessCodeAggregateOrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_units_aggregate?: InputMaybe<UserUnitsAggregateOrderBy>;
};

/** primary key columns input for table: units */
export type UnitsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "units" */
export enum UnitsSelectColumn {
  /** column name */
  BUILDING_ID = 'building_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  NUMBER = 'number',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "units" */
export type UnitsSetInput = {
  building_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type UnitsStddevFields = {
  __typename?: 'units_stddev_fields';
  number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "units" */
export type UnitsStddevOrderBy = {
  number?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type UnitsStddevPopFields = {
  __typename?: 'units_stddev_pop_fields';
  number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "units" */
export type UnitsStddevPopOrderBy = {
  number?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type UnitsStddevSampFields = {
  __typename?: 'units_stddev_samp_fields';
  number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "units" */
export type UnitsStddevSampOrderBy = {
  number?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "units" */
export type UnitsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UnitsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UnitsStreamCursorValueInput = {
  building_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type UnitsSumFields = {
  __typename?: 'units_sum_fields';
  number?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "units" */
export type UnitsSumOrderBy = {
  number?: InputMaybe<OrderBy>;
};

/** update columns of table "units" */
export enum UnitsUpdateColumn {
  /** column name */
  BUILDING_ID = 'building_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  NUMBER = 'number',
  /** column name */
  UPDATED_AT = 'updated_at'
}

export type UnitsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UnitsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UnitsSetInput>;
  /** filter the rows which have to be updated */
  where: UnitsBoolExp;
};

/** aggregate var_pop on columns */
export type UnitsVarPopFields = {
  __typename?: 'units_var_pop_fields';
  number?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "units" */
export type UnitsVarPopOrderBy = {
  number?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type UnitsVarSampFields = {
  __typename?: 'units_var_samp_fields';
  number?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "units" */
export type UnitsVarSampOrderBy = {
  number?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type UnitsVarianceFields = {
  __typename?: 'units_variance_fields';
  number?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "units" */
export type UnitsVarianceOrderBy = {
  number?: InputMaybe<OrderBy>;
};

/** columns and relationships of "user_units" */
export type UserUnits = {
  __typename?: 'user_units';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  unit: Units;
  unit_id: Scalars['uuid']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "user_units" */
export type UserUnitsAggregate = {
  __typename?: 'user_units_aggregate';
  aggregate?: Maybe<UserUnitsAggregateFields>;
  nodes: Array<UserUnits>;
};

export type UserUnitsAggregateBoolExp = {
  count?: InputMaybe<UserUnitsAggregateBoolExpCount>;
};

export type UserUnitsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserUnitsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserUnitsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "user_units" */
export type UserUnitsAggregateFields = {
  __typename?: 'user_units_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<UserUnitsMaxFields>;
  min?: Maybe<UserUnitsMinFields>;
};


/** aggregate fields of "user_units" */
export type UserUnitsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserUnitsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_units" */
export type UserUnitsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserUnitsMaxOrderBy>;
  min?: InputMaybe<UserUnitsMinOrderBy>;
};

/** input type for inserting array relation for remote table "user_units" */
export type UserUnitsArrRelInsertInput = {
  data: Array<UserUnitsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserUnitsOnConflict>;
};

/** Boolean expression to filter rows from the table "user_units". All fields are combined with a logical 'AND'. */
export type UserUnitsBoolExp = {
  _and?: InputMaybe<Array<UserUnitsBoolExp>>;
  _not?: InputMaybe<UserUnitsBoolExp>;
  _or?: InputMaybe<Array<UserUnitsBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  unit?: InputMaybe<UnitsBoolExp>;
  unit_id?: InputMaybe<UuidComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "user_units" */
export enum UserUnitsConstraint {
  /** unique or primary key constraint on columns "id" */
  USER_UNITS_PKEY = 'user_units_pkey'
}

/** input type for inserting data into table "user_units" */
export type UserUnitsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  unit?: InputMaybe<UnitsObjRelInsertInput>;
  unit_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type UserUnitsMaxFields = {
  __typename?: 'user_units_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  unit_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_units" */
export type UserUnitsMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  unit_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserUnitsMinFields = {
  __typename?: 'user_units_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  unit_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_units" */
export type UserUnitsMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  unit_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_units" */
export type UserUnitsMutationResponse = {
  __typename?: 'user_units_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserUnits>;
};

/** on_conflict condition type for table "user_units" */
export type UserUnitsOnConflict = {
  constraint: UserUnitsConstraint;
  update_columns?: Array<UserUnitsUpdateColumn>;
  where?: InputMaybe<UserUnitsBoolExp>;
};

/** Ordering options when selecting data from "user_units". */
export type UserUnitsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  unit?: InputMaybe<UnitsOrderBy>;
  unit_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_units */
export type UserUnitsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_units" */
export enum UserUnitsSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  UNIT_ID = 'unit_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "user_units" */
export type UserUnitsSetInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  unit_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_units" */
export type UserUnitsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UserUnitsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserUnitsStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  unit_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "user_units" */
export enum UserUnitsUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  UNIT_ID = 'unit_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

export type UserUnitsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserUnitsSetInput>;
  /** filter the rows which have to be updated */
  where: UserUnitsBoolExp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  phone_verified?: Maybe<Scalars['Boolean']['output']>;
  role: RolesEnum;
  /** An array relationship */
  settings: Array<Settings>;
  /** An aggregate relationship */
  settings_aggregate: SettingsAggregate;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  user_units: Array<UserUnits>;
  /** An aggregate relationship */
  user_units_aggregate: UserUnitsAggregate;
};


/** columns and relationships of "users" */
export type UsersSettingsArgs = {
  distinct_on?: InputMaybe<Array<SettingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SettingsOrderBy>>;
  where?: InputMaybe<SettingsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersSettingsAggregateArgs = {
  distinct_on?: InputMaybe<Array<SettingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<SettingsOrderBy>>;
  where?: InputMaybe<SettingsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersUserUnitsArgs = {
  distinct_on?: InputMaybe<Array<UserUnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserUnitsOrderBy>>;
  where?: InputMaybe<UserUnitsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersUserUnitsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserUnitsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserUnitsOrderBy>>;
  where?: InputMaybe<UserUnitsBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  phone?: InputMaybe<StringComparisonExp>;
  phone_verified?: InputMaybe<BooleanComparisonExp>;
  role?: InputMaybe<RolesEnumComparisonExp>;
  settings?: InputMaybe<SettingsBoolExp>;
  settings_aggregate?: InputMaybe<SettingsAggregateBoolExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user_units?: InputMaybe<UserUnitsBoolExp>;
  user_units_aggregate?: InputMaybe<UserUnitsAggregateBoolExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "email" */
  USERS_EMAIL_KEY = 'users_email_key',
  /** unique or primary key constraint on columns "phone" */
  USERS_PHONE_KEY = 'users_phone_key',
  /** unique or primary key constraint on columns "id" */
  USERS_PKEY = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_verified?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<RolesEnum>;
  settings?: InputMaybe<SettingsArrRelInsertInput>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_units?: InputMaybe<UserUnitsArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  phone?: InputMaybe<OrderBy>;
  phone_verified?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  settings_aggregate?: InputMaybe<SettingsAggregateOrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_units_aggregate?: InputMaybe<UserUnitsAggregateOrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EMAIL = 'email',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  PHONE = 'phone',
  /** column name */
  PHONE_VERIFIED = 'phone_verified',
  /** column name */
  ROLE = 'role',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_verified?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<RolesEnum>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "users" */
export type UsersStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UsersStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_verified?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<RolesEnum>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EMAIL = 'email',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  PHONE = 'phone',
  /** column name */
  PHONE_VERIFIED = 'phone_verified',
  /** column name */
  ROLE = 'role',
  /** column name */
  UPDATED_AT = 'updated_at'
}

export type UsersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  /** filter the rows which have to be updated */
  where: UsersBoolExp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type InsertUserMutationVariables = Exact<{
  object: UsersInsertInput;
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: string } | null };

export type GetUserByPhoneQueryVariables = Exact<{
  phone: Scalars['String']['input'];
}>;


export type GetUserByPhoneQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string }> };


export const InsertUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"users_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_users_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertUserMutation, InsertUserMutationVariables>;
export const GetUserByPhoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserByPhone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"phone"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetUserByPhoneQuery, GetUserByPhoneQueryVariables>;