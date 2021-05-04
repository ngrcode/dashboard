import GuideBlockComponent from "infrastructure/authorized/partials/GuideBlockComponent";
import React from "react";

export const steps = [
    {
        selector: '.upload-block',
        content: ({goTo, inDOM}) => (
            <div>
                <GuideBlockComponent/>
            </div>
        ),
        position: 'top',
        stepInteraction: false,
    }
]
