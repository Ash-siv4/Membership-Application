import { appendToFile } from './fileOperations.js';
import { validateMembershipNumber, validateGender, validateJoinDate, validateMembershipType, validateSubscriptionMonth } from './validation.js';

export function addMember() {
    const membershipNumber = document.getElementById('membershipNumber').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const postcode = document.getElementById('postcode').value;
    const gender = document.getElementById('gender').value;
    const joinDate = document.getElementById('joinDate').value;
    const membershipType = document.getElementById('membershipType').value;
    const subscriptionMonth = document.getElementById('subscriptionMonth').value;

    let errorCode = validateMembershipNumber(membershipNumber);
    if (errorCode) {
        alert(`${errorCode}: Membership Number is not valid`);
        return;
    }

    errorCode = validateGender(gender);
    if (errorCode) {
        alert(`${errorCode}: Gender must be F or M`);
        return;
    }

    errorCode = validateJoinDate(joinDate);
    if (errorCode) {
        alert(`${errorCode}: Invalid Join Date`);
        return;
    }

    errorCode = validateMembershipType(membershipType);
    if (errorCode) {
        alert(`${errorCode}: Membership type must be F, S, T or B`);
        return;
    }

    errorCode = validateSubscriptionMonth(subscriptionMonth);
    if (errorCode) {
        alert(`${errorCode}: Subscription month invalid`);
        return;
    }

    const record = `${membershipNumber}\t${firstName}\t${lastName}\t${address}\t${postcode}\t${gender}\t${joinDate}\t${membershipType}\t${subscriptionMonth}`;
    appendToFile(record);
    alert('Member added successfully');
}
