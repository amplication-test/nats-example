import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OfekCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Job" source="job" />
        <TextInput label="One" source="one" />
      </SimpleForm>
    </Create>
  );
};
