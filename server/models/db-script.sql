
create schema pmpdb;

CREATE TABLE pmpdb.ref_month (
	id integer NULL,
	"name" varchar NULL
);
ALTER TABLE pmpdb.ref_month ADD CONSTRAINT ref_month_pk PRIMARY KEY (id);

CREATE TABLE pmpdb.ref_year (
	id integer NULL,
	"name" varchar NULL
);
ALTER TABLE pmpdb.ref_year ADD CONSTRAINT ref_year_pk PRIMARY KEY (id);

CREATE TABLE pmpdb.ref_role (
	id integer NULL,
	"name" varchar NULL
);
ALTER TABLE pmpdb.ref_role ADD CONSTRAINT ref_role_pk PRIMARY KEY (id);

CREATE TABLE pmpdb.ref_group (
	id integer NULL,
	"name" varchar NULL
);
ALTER TABLE pmpdb.ref_group ADD CONSTRAINT ref_group_pk PRIMARY KEY (id);

CREATE TABLE pmpdb.ref_type (
	id integer NOT NULL,
	task_type varchar NOT NULL,
	CONSTRAINT ref_type_pk PRIMARY KEY (id)
);

CREATE TABLE pmpdb.ref_status (
	id integer NOT NULL,
	status varchar NOT NULL,
	CONSTRAINT ref_status_pk PRIMARY KEY (id)
);


CREATE TABLE pmpdb.glb_resource (
	id integer NULL,
	"name" varchar NULL,
	fname varchar NULL,
	lname varchar NULL,
	role_id integer NOT NULL,
	group_id varchar NOT NULL
);
ALTER TABLE pmpdb.glb_resource ADD CONSTRAINT glb_resource_pk PRIMARY KEY (id);
ALTER TABLE pmpdb.glb_resource ADD CONSTRAINT glb_resource_fk FOREIGN KEY (id) REFERENCES pmpdb.ref_role(id);
ALTER TABLE pmpdb.glb_resource ADD CONSTRAINT glb_resource_fk_1 FOREIGN KEY (id) REFERENCES pmpdb.ref_group(id);


CREATE TABLE pmpdb.pmp_project (
	id integer NOT NULL,
	"name" varchar NOT NULL
);
ALTER TABLE pmpdb.pmp_project ADD CONSTRAINT pmp_project_pk PRIMARY KEY (id);
ALTER TABLE pmpdb.pmp_project ADD description varchar NULL;
ALTER TABLE pmpdb.pmp_project ADD objectives varchar NULL;


create table allocation (
    id int auto_increment,
    name varchar(100)
);


CREATE TABLE pmpdb.dept (
	id integer NOT NULL,
	"name" varchar(500) NOT NULL,
	parent_id integer NOT NULL
);
 

 
CREATE TABLE pmpdb.holiday (
	id integer NOT NULL,
	"name" varchar(500) NOT NULL,
    holiday_date timestmap NOT NULL,
	month_id integer NOT NULL,
    year_id integer NOT NULL
);
 
CREATE TABLE pmpdb.sprint_group (
	id integer NULL,
	"name" varchar NOT NULL,
	CONSTRAINT sprint_group_pk PRIMARY KEY (id)
);

CREATE TABLE pmpdb.sprint_release (
	id integer NULL,
	"name" varchar NULL,
	"date" timestamp NULL,
	start_date timestamp NULL,
	CONSTRAINT sprint_release_pk PRIMARY KEY (id),
	CONSTRAINT sprint_release_un UNIQUE ("name")
);


CREATE TABLE pmpdb.sprint_sprint (
	id integer NOT NULL,
	"name" varchar NOT NULL,
	start_date timestamp NOT NULL,
	end_date timestamp NOT NULL,
	notes varchar NULL,
	CONSTRAINT sprint_sprint_pk PRIMARY KEY (id),
	CONSTRAINT sprint_sprint_un UNIQUE ("name")
);

CREATE TABLE pmpdb.sprint_epic (
	id integer NULL,
	"name" varchar NULL,
	"group" varchar NULL
);
ALTER TABLE pmpdb.sprint_epic ADD CONSTRAINT sprint_epic_pk PRIMARY KEY (id);
ALTER TABLE pmpdb.sprint_epic ADD assignee_id integer NULL;
ALTER TABLE pmpdb.sprint_epic ADD group_id integer NULL;
ALTER TABLE pmpdb.sprint_epic ADD "desc" varchar NULL;
ALTER TABLE pmpdb.sprint_epic ADD status_id integer NULL;
ALTER TABLE pmpdb.sprint_epic ADD reporter_id integer NULL;
ALTER TABLE pmpdb.sprint_epic ADD release_id integer NULL;
ALTER TABLE pmpdb.sprint_epic ADD CONSTRAINT sprint_epic_fk FOREIGN KEY (status_id) REFERENCES pmpdb.ref_status(id);
ALTER TABLE pmpdb.sprint_epic ADD CONSTRAINT sprint_epic_fk_1 FOREIGN KEY (release_id) REFERENCES pmpdb.sprint_release(id);
ALTER TABLE pmpdb.sprint_epic ADD CONSTRAINT sprint_epic_fk_2 FOREIGN KEY (assignee_id) REFERENCES pmpdb.glb_resource(id);
ALTER TABLE pmpdb.sprint_epic ADD CONSTRAINT sprint_epic_fk_3 FOREIGN KEY (reporter_id) REFERENCES pmpdb.glb_resource(id);
ALTER TABLE pmpdb.sprint_epic ADD CONSTRAINT sprint_epic_fk_4 FOREIGN KEY (group_id) REFERENCES pmpdb.sprint_group(id);

 CREATE TABLE pmpdb.sprint_task (
	id integer NULL,
	"name" varchar NULL,
	"desc" varchar NULL,
	release_id integer NULL,
	epic_id integer NULL,
	status_id integer NULL,
	assignee_id integer NULL,
	reported_id integer NULL,
	group_id integer NULL,
	CONSTRAINT sprint_task_pk PRIMARY KEY (id),
	CONSTRAINT sprint_task_fk FOREIGN KEY (release_id) REFERENCES pmpdb.sprint_release(id),
	CONSTRAINT sprint_task_fk_1 FOREIGN KEY (group_id) REFERENCES pmpdb.sprint_group(id),
	CONSTRAINT sprint_task_fk_2 FOREIGN KEY (status_id) REFERENCES pmpdb.ref_status(id),
	CONSTRAINT sprint_task_fk_3 FOREIGN KEY (epic_id) REFERENCES pmpdb.sprint_epic(id),
	CONSTRAINT sprint_task_fk_4 FOREIGN KEY (assignee_id) REFERENCES pmpdb.glb_resource(id),
	CONSTRAINT sprint_task_fk_5 FOREIGN KEY (reported_id) REFERENCES pmpdb.glb_resource(id)
);

