import React, { Component, Fragment } from 'react'
import EdictionList from './EducationList'
class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
            EducationList: EdictionList
        }
    }
    render() {
        return (
            <div className="Education" style={{ paddingLeft: '83px' }}> {/* Again put css in an external file. */}

                <div>
                    {
                        this.state.EducationList.map((datarow) =>
                            <Fragment key={datarow.id}>
                                <p>
                                    <b><i>{datarow.university}</i></b> <br />
                                    <i>{datarow.country}</i>
                                </p>
                                {
                                    (typeof (datarow.Description) == 'object') &&
                                    <div>
                                        {datarow.Description.map((subDatarow) =>
                                            <Fragment key={datarow.id}>
                                                <ul>

                                                    <li>{subDatarow.Description1}</li>

                                                </ul>
                                            </Fragment>
                                        )
                                        }
                                    </div>
                                }
                            </Fragment>
                        )
                    }

                </div>

            </div>
        )
    }
};

export default Education;
