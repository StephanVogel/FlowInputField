import { LightningElement, track, api } from 'lwc';

export default class FlowInputField extends LightningElement {
    @api inputObjectApiName;
    @track objectApiName;
    @api inputFieldName;
    @track fieldName;
    @api inputRecordTypeId;
    @track recordTypeId;
    @api outputFieldValue;

    connectedCallback() {
        this.objectApiName = this.inputObjectApiName;
        this.fieldName = this.inputFieldName;
        this.recordTypeId = this.inputRecordTypeId;
    }
    
    handleValueChange(event) {
        this.outputFieldValue = event.detail.value;
    }
}