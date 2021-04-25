create schema health_monitor authorization postgres;

CREATE TABLE health_monitor.applications
(
  application_id integer NOT NULL,
  name varchar(250)
);

ALTER TABLE health_monitor.applications ADD CONSTRAINT pk_applications
  PRIMARY KEY (application_id);

CREATE TABLE health_monitor.groups
(
  group_id integer NOT NULL,
  name varchar(250) NOT NULL
);

ALTER TABLE health_monitor.groups ADD CONSTRAINT pk_groups
  PRIMARY KEY (group_id);

CREATE TABLE health_monitor.organizations
(
  organization_id integer NOT NULL,
  name varchar(250)
);

ALTER TABLE health_monitor.organizations ADD CONSTRAINT pk_organizations
  PRIMARY KEY (organization_id);

CREATE TABLE health_monitor.proxies
(
  proxy_id integer NOT NULL,
  host varchar(250) NOT NULL,
  port integer
);

ALTER TABLE health_monitor.proxies ADD CONSTRAINT pk_proxies
  PRIMARY KEY (proxy_id);

CREATE TABLE health_monitor.server_status_history
(
  id integer NOT NULL,
  server_id integer NOT NULL,
  status_id integer NOT NULL,
  status_date date NOT NULL
);

ALTER TABLE health_monitor.server_status_history ADD CONSTRAINT pk_server_status_history
  PRIMARY KEY (id);

CREATE TABLE health_monitor.servers
(
  server_id integer NOT NULL,
  display_name varchar(120) NOT NULL,
  uri varchar(300) NOT NULL,
  organization_id integer,
  group_id integer,
  application_id integer,
  proxy_id integer,
  status_id integer NOT NULL
);

ALTER TABLE health_monitor.servers ADD CONSTRAINT pk_servers
  PRIMARY KEY (server_id);

CREATE TABLE health_monitor.site_config
(
  id integer NOT NULL,
  custom_name varchar(250)
);

ALTER TABLE health_monitor.site_config ADD CONSTRAINT pk_site_config
  PRIMARY KEY (id);

CREATE TABLE health_monitor.statuses
(
  status_id integer NOT NULL,
  status bigint NOT NULL
);

ALTER TABLE health_monitor.statuses ADD CONSTRAINT pk_statuses
  PRIMARY KEY (status_id);

ALTER TABLE health_monitor.server_status_history ADD CONSTRAINT fk_server_status_history_
  FOREIGN KEY (status_id) REFERENCES health_monitor.statuses (status_id);

ALTER TABLE health_monitor.server_status_history ADD CONSTRAINT fk_server_status_history_servers
  FOREIGN KEY (server_id) REFERENCES health_monitor.servers (server_id);

ALTER TABLE health_monitor.servers ADD CONSTRAINT fk_servers_application_id
  FOREIGN KEY (application_id) REFERENCES health_monitor.applications (application_id);

ALTER TABLE health_monitor.servers ADD CONSTRAINT fk_servers_group_id
  FOREIGN KEY (group_id) REFERENCES health_monitor.groups (group_id);

ALTER TABLE health_monitor.servers ADD CONSTRAINT fk_servers_organization_id
  FOREIGN KEY (organization_id) REFERENCES health_monitor.organizations (organization_id);

ALTER TABLE health_monitor.servers ADD CONSTRAINT fk_servers_proxies
  FOREIGN KEY (proxy_id) REFERENCES health_monitor.proxies (proxy_id);

ALTER TABLE health_monitor.servers ADD CONSTRAINT fk_servers_s
  FOREIGN KEY (status_id) REFERENCES health_monitor.statuses (status_id);
