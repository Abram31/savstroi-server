import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const JobEdite = (props) => {
    return (
        <Edit title='Edite Post' 
        {...props}
        >
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='title' />
                <TextInput multiline label="Обязанности" source='responsibilities.text' fullWidth />
                <TextInput multiline label="Опыт" source='requirements.text' fullWidth />
                <TextInput multiline label="Условия работы" source='conditions.text' fullWidth />
                <TextInput multiline label="Заработная плата" source='wage.text' fullWidth />
                <TextInput multiline label="Контактное лицо для связи" source='contactPerson.contactPerson' fullWidth />
                <TextInput multiline label="Телефон" source='contactPerson.phones[0]' fullWidth />
                <TextInput multiline label="Телефон" source='contactPerson.phones[1]' fullWidth />
            </SimpleForm>
        </Edit>
    )
}
