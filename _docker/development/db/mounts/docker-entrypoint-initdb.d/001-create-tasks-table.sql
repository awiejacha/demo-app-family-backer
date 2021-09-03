create table if not exists family_backer.tasks
(
    id             varchar(12)                          not null,
    id_location    int                                  not null,
    id_definition  int                                  not null,
    id_state       int      default 1                   not null,
    id_assignee    int                                  null,
    id_responsible int                                  null,
    created_at     datetime default (now())             not null,
    modified_at    datetime default (CURRENT_TIMESTAMP) null on update CURRENT_TIMESTAMP,
    constraint tasks_id_uindex
    unique (id)
);

alter table family_backer.tasks
    add primary key (id);
