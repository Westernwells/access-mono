-- Enum Tables with Comments
CREATE TABLE roles (
  value TEXT PRIMARY KEY,
  comment TEXT NOT NULL
);

CREATE TABLE call_types (
  value TEXT PRIMARY KEY,
  comment TEXT NOT NULL
);

CREATE TABLE notification_types (
  value TEXT PRIMARY KEY,
  comment TEXT NOT NULL
);

CREATE TABLE two_fa_types (
  value TEXT PRIMARY KEY,
  comment TEXT NOT NULL
);

CREATE TABLE one_time_access_code_status_types (
  value TEXT PRIMARY KEY,
  comment TEXT NOT NULL
);


-- Main Tables
CREATE TABLE buildings (
  id UUID PRIMARY KEY,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  name TEXT NOT NULL,
  address TEXT NOT NULL
);

CREATE TABLE units (
  id UUID PRIMARY KEY,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  number INTEGER NOT NULL,
  building_id UUID NOT NULL REFERENCES buildings(id)
);

CREATE TABLE users (
  id UUID PRIMARY KEY,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  role TEXT NOT NULL REFERENCES roles(value),
  building_id UUID NOT NULL REFERENCES buildings(id),
  unit_id UUID NOT NULL REFERENCES units(id),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  phone_verified BOOLEAN DEFAULT FALSE,
  email TEXT
);

CREATE TABLE announcements (
  id UUID PRIMARY KEY,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  building_id UUID REFERENCES buildings(id),
  title TEXT NOT NULL,
  description JSONB NOT NULL,
  scheduled_at TIMESTAMP NOT NULL
);

CREATE TABLE call_logs (
  id UUID PRIMARY KEY,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  user_id UUID NOT NULL REFERENCES users(id),
  type TEXT NOT NULL REFERENCES call_types(value)
);

CREATE TABLE notifications (
  id UUID PRIMARY KEY,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  user_id UUID NOT NULL REFERENCES users(id),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  type TEXT NOT NULL REFERENCES notification_types(value)
);

CREATE TABLE settings (
  id UUID PRIMARY KEY,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  user_id UUID NOT NULL REFERENCES users(id),
  two_fa_type TEXT NOT NULL REFERENCES two_fa_types(value)
);

CREATE TABLE one_time_access_code (
  id UUID PRIMARY KEY,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  user_id UUID NOT NULL REFERENCES users(id),
  code TEXT NOT NULL,
  status TEXT NOT NULL REFERENCES one_time_access_code_status_types(value),
  purpose TEXT NOT NULL,
  valid_from TIMESTAMP,
  valid_to TIMESTAMP,
  visitor_photo TEXT
);


-- Seed roles
INSERT INTO roles (value, comment) VALUES
  ('resident', 'A user who resides in the building'),
  ('admin', 'A user with administrative privileges'),
  ('visitor', 'A temporary user or guest');

-- Seed call_types
INSERT INTO call_types (value, comment) VALUES
  ('missed', 'A call that was not answered'),
  ('answered', 'A call that was answered'),
  ('unlocked', 'A call that resulted in door unlock');

-- Seed notification_types
INSERT INTO notification_types (value, comment) VALUES
  ('missed_call', 'Notification for a missed call'),
  ('answered_call', 'Notification for an answered call'),
  ('system_notice', 'System-generated notification');

-- Seed two_fa_types
INSERT INTO two_fa_types (value, comment) VALUES
  ('email', 'Two-factor authentication via email'),
  ('phone', 'Two-factor authentication via phone'),
  ('auth_app', 'Two-factor authentication via authenticator app'),
  ('disabled', 'Two-factor authentication is disabled');

-- Seed one_time_access_code_status_types
INSERT INTO one_time_access_code_status_types (value, comment) VALUES
  ('active', 'Access code is currently active'),
  ('used', 'Access code has been used');
