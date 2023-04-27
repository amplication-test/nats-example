import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OfekEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Job" source="job" />
        <TextInput label="One" source="one" />
      </SimpleForm>
    </Edit>
  );
};
