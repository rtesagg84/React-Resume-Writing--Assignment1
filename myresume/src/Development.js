import React, { Component } from 'react';
import Developmentlist from './Developmentlist';
class Development extends Component {
    constructor(props) {
        super(props);
        this.State = {
            Developmentlist: Developmentlist
        }
    }

    render() {

        return (
            <div>{
                this.State.Developmentlist.map((rowdata) =>
                    <React.Fragment key={rowdata.id}>
                        <h5 ><i> {rowdata.Roll}</i></h5>
                        {
                            (typeof (rowdata.detail) == 'object') &&
                            <div>
                                {rowdata.detail.map((subRowData) =>
                                    <React.Fragment key={rowdata.id}>
                                        <ul>
                                            <li>{subRowData.detail1}</li>
                                            <li>{subRowData.detail2}</li>
                                            <li>{subRowData.detail3}</li>
                                            {/* Another array map could be used here above for these <li> */}
                                        </ul>
                                    </React.Fragment>
                                )
                                }
                            </div>
                            // Since you don't have a secondary thing to render, you can use a short circuit 'logical and' ( && ) here instead of a ternary operator
                        }

                    </React.Fragment>
                )
            }

            </div>
        )
    }
}

export default Development;