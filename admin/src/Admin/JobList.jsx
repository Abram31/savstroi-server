import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, FunctionField } from 'react-admin';

export const JobList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField label="Должность" source='title' />
                <TextField label="Обязанности" source='responsibilities.text' />
                <TextField label="Опыт" source='requirements.text' />
                <TextField label="Условия работы" source='conditions.text' />
                <TextField label="Заработная плата" source='wage.text' />
                <TextField label="Контактное лицо для связи" source='contactPerson.contactPerson' />
                <FunctionField source='contactPerson.phones'
                    label="Телефон"
                    render={record => `${record.contactPerson.phones}`}
                />
                <EditButton basepath='/jobs' />
                <DeleteButton basepath='/jobs' />
            </Datagrid>
        </List>
    )
}
