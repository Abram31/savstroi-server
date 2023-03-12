import React, { useState } from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin';

export const JobCreate = (props) => {

    return (
        <Create title='Create a Post' {...props}>
            <SimpleForm>
            <TextInput source='id' disabled/>
            <TextInput source='title' />
            <TextInput disabled label="Обязанности" source='responsibilities.name' fullWidth defaultValue={"Обязанности"} />
            <TextInput multiline label="Обязанности" source='responsibilities.text' fullWidth />

            <TextInput disabled label="Опыт" source='requirements.name' fullWidth defaultValue={"Опыт"} />
            <TextInput multiline label="Опыт" source='requirements.text' fullWidth />

            <TextInput disabled label="Условия работы" source='conditions.name' fullWidth defaultValue={"Условия работы"} />
            <TextInput multiline label="Условия работы" source='conditions.text' fullWidth />

            <TextInput disabled label="Заработная плата" source='wage.name' fullWidth defaultValue={"Заработная плата"} />
            <TextInput multiline label="Заработная плата" source='wage.text' fullWidth />

            <TextInput disabled label="Контактное лицо для связи" source='contactPerson.name' fullWidth defaultValue={"Контактное лицо для связи"} />
            <TextInput multiline label="Контактное лицо для связи" source='contactPerson.contactPerson' fullWidth />

            <TextInput multiline label="Телефон" source='contactPerson.phones[0]' fullWidth />
            <TextInput multiline label="Телефон" source='contactPerson.phones[1]' fullWidth />

        </SimpleForm>
        </Create >
    )
}
