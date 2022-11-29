import React, {useState} from 'react';

function Inputfield({fieldId, fieldType, fieldPlaceholder, fieldName, fieldText, fieldContent, setFieldContent}) {

    return (
        <div className="input-field">
            <label id={fieldId}>
                {fieldText}
                <input
                    className="inputfield"
                    type={fieldType}
                    name={fieldName}
                    placeholder={fieldPlaceholder}
                    value={fieldContent}
                    onChange={(e) => setFieldContent(e.target.value)}
                />
            </label>
        </div>
    );
};

export default Inputfield;