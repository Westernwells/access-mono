
alter table "public"."access_logs" drop constraint "access_logs_unit_id_fkey",
  add constraint "access_logs_unit_id_fkey"
  foreign key ("unit_id")
  references "public"."units"
  ("id") on update no action on delete no action;

alter table "public"."announcements" drop constraint "announcements_building_id_fkey",
  add constraint "announcements_building_id_fkey"
  foreign key ("building_id")
  references "public"."buildings"
  ("id") on update no action on delete no action;

alter table "public"."buildings" drop constraint "buildings_organization_id_fkey",
  add constraint "buildings_organization_id_fkey"
  foreign key ("organization_id")
  references "public"."organizations"
  ("id") on update no action on delete no action;

alter table "public"."devices" drop constraint "devices_building_id_fkey",
  add constraint "devices_building_id_fkey"
  foreign key ("building_id")
  references "public"."buildings"
  ("id") on update no action on delete no action;

alter table "public"."notifications" drop constraint "notifications_building_id_fkey",
  add constraint "notifications_building_id_fkey"
  foreign key ("building_id")
  references "public"."buildings"
  ("id") on update no action on delete no action;

alter table "public"."one_time_access_code" drop constraint "one_time_access_code_access_log_id_fkey",
  add constraint "one_time_access_code_access_log_id_fkey"
  foreign key ("access_log_id")
  references "public"."access_logs"
  ("id") on update no action on delete no action;

alter table "public"."settings" drop constraint "settings_user_id_fkey",
  add constraint "settings_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update no action on delete no action;

alter table "public"."units" drop constraint "units_building_id_fkey",
  add constraint "units_building_id_fkey"
  foreign key ("building_id")
  references "public"."buildings"
  ("id") on update no action on delete no action;

alter table "public"."user_units" drop constraint "user_units_user_id_fkey",
  add constraint "user_units_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update no action on delete no action;

alter table "public"."user_units" drop constraint "user_units_unit_id_fkey",
  add constraint "user_units_unit_id_fkey"
  foreign key ("unit_id")
  references "public"."units"
  ("id") on update no action on delete no action;

alter table "public"."one_time_access_code" drop constraint "one_time_access_code_unit_id_fkey";

alter table "public"."one_time_access_code" rename column "unit_id" to "user_id";

alter table "public"."one_time_access_code"
  add constraint "one_time_access_code_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update no action on delete no action;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- -- Create enum tables
-- CREATE TABLE roles (
--   value TEXT PRIMARY KEY,
--   comment TEXT NOT NULL
-- );
--
-- CREATE TABLE call_status (
--   value TEXT PRIMARY KEY,
--   comment TEXT NOT NULL
-- );
--
-- CREATE TABLE call_types (
--   value TEXT PRIMARY KEY,
--   comment TEXT NOT NULL
-- );
--
-- CREATE TABLE notification_types (
--   value TEXT PRIMARY KEY,
--   comment TEXT NOT NULL
-- );
--
-- CREATE TABLE two_fa_types (
--   value TEXT PRIMARY KEY,
--   comment TEXT NOT NULL
-- );
--
-- CREATE TABLE one_time_access_code_status_types (
--   value TEXT PRIMARY KEY,
--   comment TEXT NOT NULL
-- );
--
-- -- Create main tables
-- CREATE TABLE organizations (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   created_at TIMESTAMP DEFAULT now(),
--   updated_at TIMESTAMP DEFAULT now(),
--   name TEXT NOT NULL
-- );
--
-- CREATE TABLE buildings (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   created_at TIMESTAMP DEFAULT now(),
--   updated_at TIMESTAMP DEFAULT now(),
--   organization_id UUID NOT NULL REFERENCES organizations(id),
--   name TEXT NOT NULL,
--   address TEXT NOT NULL
-- );
--
-- CREATE TABLE units (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   created_at TIMESTAMP DEFAULT now(),
--   updated_at TIMESTAMP DEFAULT now(),
--   number INTEGER NOT NULL,
--   building_id UUID NOT NULL REFERENCES buildings(id)
-- );
--
-- CREATE TABLE users (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   created_at TIMESTAMP DEFAULT now(),
--   updated_at TIMESTAMP DEFAULT now(),
--   role TEXT NOT NULL REFERENCES roles(value),
--   name TEXT NOT NULL,
--   phone TEXT UNIQUE NOT NULL,
--   phone_verified BOOLEAN DEFAULT false,
--   email TEXT UNIQUE
-- );
--
-- CREATE TABLE user_units (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   created_at TIMESTAMP DEFAULT now(),
--   updated_at TIMESTAMP DEFAULT now(),
--   user_id UUID NOT NULL REFERENCES users(id),
--   unit_id UUID NOT NULL REFERENCES units(id)
-- );
--
-- CREATE TABLE announcements (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   created_at TIMESTAMP DEFAULT now(),
--   updated_at TIMESTAMP DEFAULT now(),
--   building_id UUID REFERENCES buildings(id),
--   title TEXT NOT NULL,
--   description JSONB NOT NULL,
--   scheduled_at TIMESTAMP NOT NULL
-- );
--
-- CREATE TABLE access_logs (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   created_at TIMESTAMP DEFAULT now(),
--   updated_at TIMESTAMP DEFAULT now(),
--   unit_id UUID NOT NULL REFERENCES units(id),
--   type TEXT NOT NULL REFERENCES call_types(value),
--   status TEXT REFERENCES call_status(value),
--   visitor_image_uri TEXT
-- );
--
-- CREATE TABLE notifications (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   created_at TIMESTAMP DEFAULT now(),
--   updated_at TIMESTAMP DEFAULT now(),
--   building_id UUID NOT NULL REFERENCES buildings(id),
--   title TEXT NOT NULL,
--   description TEXT NOT NULL,
--   type TEXT NOT NULL REFERENCES notification_types(value)
-- );
--
-- CREATE TABLE settings (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   created_at TIMESTAMP DEFAULT now(),
--   updated_at TIMESTAMP DEFAULT now(),
--   user_id UUID NOT NULL REFERENCES users(id),
--   two_fa_type TEXT NOT NULL REFERENCES two_fa_types(value)
-- );
--
-- CREATE TABLE one_time_access_code (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   created_at TIMESTAMP DEFAULT now(),
--   updated_at TIMESTAMP DEFAULT now(),
--   user_id UUID NOT NULL REFERENCES users(id),
--   code TEXT NOT NULL,
--   status TEXT NOT NULL REFERENCES one_time_access_code_status_types(value),
--   purpose TEXT NOT NULL,
--   valid_from TIMESTAMP,
--   valid_to TIMESTAMP,
--   access_log_id UUID REFERENCES access_logs(id)
-- );
--
-- CREATE TABLE devices (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   created_at TIMESTAMP DEFAULT now(),
--   updated_at TIMESTAMP DEFAULT now(),
--   building_id UUID NOT NULL REFERENCES buildings(id),
--   name TEXT NOT NULL
-- );
--
-- -- Create the update timestamp function
-- CREATE OR REPLACE FUNCTION update_timestamp()
-- RETURNS TRIGGER AS $$
-- BEGIN
--   NEW.updated_at = now();
--   RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;
--
-- -- Create triggers for all tables with updated_at columns
-- CREATE TRIGGER set_timestamp_organizations
-- BEFORE UPDATE ON organizations
-- FOR EACH ROW EXECUTE FUNCTION update_timestamp();
--
-- CREATE TRIGGER set_timestamp_buildings
-- BEFORE UPDATE ON buildings
-- FOR EACH ROW EXECUTE FUNCTION update_timestamp();
--
-- CREATE TRIGGER set_timestamp_units
-- BEFORE UPDATE ON units
-- FOR EACH ROW EXECUTE FUNCTION update_timestamp();
--
-- CREATE TRIGGER set_timestamp_users
-- BEFORE UPDATE ON users
-- FOR EACH ROW EXECUTE FUNCTION update_timestamp();
--
-- CREATE TRIGGER set_timestamp_user_units
-- BEFORE UPDATE ON user_units
-- FOR EACH ROW EXECUTE FUNCTION update_timestamp();
--
-- CREATE TRIGGER set_timestamp_announcements
-- BEFORE UPDATE ON announcements
-- FOR EACH ROW EXECUTE FUNCTION update_timestamp();
--
-- CREATE TRIGGER set_timestamp_access_logs
-- BEFORE UPDATE ON access_logs
-- FOR EACH ROW EXECUTE FUNCTION update_timestamp();
--
-- CREATE TRIGGER set_timestamp_notifications
-- BEFORE UPDATE ON notifications
-- FOR EACH ROW EXECUTE FUNCTION update_timestamp();
--
-- CREATE TRIGGER set_timestamp_settings
-- BEFORE UPDATE ON settings
-- FOR EACH ROW EXECUTE FUNCTION update_timestamp();
--
-- CREATE TRIGGER set_timestamp_one_time_access_code
-- BEFORE UPDATE ON one_time_access_code
-- FOR EACH ROW EXECUTE FUNCTION update_timestamp();
--
-- CREATE TRIGGER set_timestamp_devices
-- BEFORE UPDATE ON devices
-- FOR EACH ROW EXECUTE FUNCTION update_timestamp();
--
-- -- Seed enum tables
-- INSERT INTO roles (value, comment) VALUES
--   ('resident', 'A user who resides in the building'),
--   ('admin', 'A user with administrative privileges'),
--   ('visitor', 'A temporary user or guest for tablet in kiosk mode');
--
-- INSERT INTO call_status (value, comment) VALUES
--   ('missed', 'A call that was not answered'),
--   ('answered', 'A call that was answered'),
--   ('unlocked', 'A call that resulted in door unlock');
--
-- INSERT INTO call_types (value, comment) VALUES
--   ('access_code', 'Access via one-time code'),
--   ('call', 'Access via intercom call');
--
-- INSERT INTO notification_types (value, comment) VALUES
--   ('missed_call', 'Notification for a missed call'),
--   ('answered_call', 'Notification for an answered call'),
--   ('system_notice', 'System-generated notification');
--
-- INSERT INTO two_fa_types (value, comment) VALUES
--   ('email', 'Two-factor authentication via email'),
--   ('phone', 'Two-factor authentication via phone'),
--   ('auth_app', 'Two-factor authentication via authenticator app'),
--   ('disabled', 'Two-factor authentication is disabled');
--
-- INSERT INTO one_time_access_code_status_types (value, comment) VALUES
--   ('active', 'Access code is currently active'),
--   ('used', 'Access code has been used'),
--   ('expired', 'Access code has expired');
