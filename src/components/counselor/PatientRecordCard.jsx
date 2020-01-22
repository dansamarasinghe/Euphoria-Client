import React, {Component} from "react";
import {Button, Card, CardActions, CardContent, CardHeader, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import EuphoriaEditor from "../EuphoriaEditor";
import {Editor} from 'react-draft-wysiwyg';

class PatientRecordCard extends Component {

    constructor(props) {
        //compatible props: title,timestamp, recordEditorState, prescriptionEditorState
        super(props);
        this.state = {
            record:props.record,
            recordEditorState:props.record.description,
            prescriptionEditorState:props.record.prescription
        };
    }