-- Add default UUID generation for all id columns
ALTER TABLE buildings 
  ALTER COLUMN id SET DEFAULT gen_random_uuid();

ALTER TABLE units 
  ALTER COLUMN id SET DEFAULT gen_random_uuid();

ALTER TABLE users 
  ALTER COLUMN id SET DEFAULT gen_random_uuid();

ALTER TABLE announcements 
  ALTER COLUMN id SET DEFAULT gen_random_uuid();

ALTER TABLE call_logs 
  ALTER COLUMN id SET DEFAULT gen_random_uuid();

ALTER TABLE notifications 
  ALTER COLUMN id SET DEFAULT gen_random_uuid();

ALTER TABLE settings 
  ALTER COLUMN id SET DEFAULT gen_random_uuid();

ALTER TABLE one_time_access_code 
  ALTER COLUMN id SET DEFAULT gen_random_uuid();
