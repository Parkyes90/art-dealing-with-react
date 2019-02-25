import * as React from 'react';
import { MemberEntity } from '../../model';
import { memberAPI } from '../../api/Member';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';

interface State {
  members: MemberEntity[];
}


export class MembersPage extends React.Component<{}, State> {
  public state: any = { members: [] };

  public componentDidMount() {
    memberAPI.fetchMembersAsync()
      .then((members) => {
        this.setState({ members });
      });
  }


  public render() {
    return (
      <div className="row">
        <h2> Members Page</h2>
        <table className="table">
          <thead>
          <MemberHeader />
          </thead>
          <tbody>
          {
            this.state.members.map((member: any) => (
                <MemberRow
                  key={member.id}
                  // key={member.id}
                  member={member}
                />
              )
            )
          }
          </tbody>
        </table>
      </div>
    );
  }
}

