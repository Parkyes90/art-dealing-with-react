import * as React from 'react';
import { MemberEntity, MemberErrors } from '../../model';
import { MemberForm } from './MemberForm';

interface Props {
  member: MemberEntity;
  memberErrors: MemberErrors;
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export const MemberPage: React.FC<Props> = (props) => {
  return (
    <MemberForm
      member={props.member}
      memberErrors={props.memberErrors}
      onChange={props.onChange}
      onSave={props.onSave}
    />
  );
};
