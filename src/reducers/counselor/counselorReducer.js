import * as actionTypes from '../../actions/types';

const initialState = {
    signedIn: false,
    patientRecords: [],
    appointments:[
        {
            "id": {
                "counselor": {
                    "id": 1,
                    "createdAt": [
                        2020,
                        2,
                        17,
                        9,
                        41,
                        31,
                        64306000
                    ],
                    "updatedAt": [
                        2020,
                        2,
                        17,
                        9,
                        41,
                        31,
                        64306000
                    ],
                    "name": "TestCounselor",
                    "description": "This account is for testing",
                    "specialty": "N/A",
                    "hospital": "N/A",
                    "city": "Colombo",
                    "photoUrl": "",
                    "loginCredentials": {
                        "id": 1,
                        "createdAt": [
                            2020,
                            2,
                            17,
                            9,
                            41,
                            30,
                            994492000
                        ],
                        "updatedAt": [
                            2020,
                            2,
                            17,
                            9,
                            41,
                            30,
                            994492000
                        ],
                        "username": "testCounselor",
                        "password": "password",
                        "email": "testCounselor@euphoria.io",
                        "enabled": true,
                        "authorities": null,
                        "accountNonLocked": true,
                        "credentialsNonExpired": true,
                        "accountNonExpired": true
                    }
                },
                "user": {
                    "gender": "M",
                    "email": "testUser@euphoria.io",
                    "password": null,
                    "nic": "2020000000000",
                    "city": "Colombo",
                    "district": "Colombo",
                    "pic_name": null,
                    "activated": "yes",
                    "deleted": false,
                    "status": null,
                    "uid": 1,
                    "first_name": "TestUserFN",
                    "last_name": "TestUserLN",
                    "contact_number": 19473554,
                    "date_of_birth": "2020-02-17",
                    "account_type": "formal",
                    "timestamp": 1581912691142
                },
                "createdAt": [
                    2020,
                    2,
                    17,
                    9,
                    41,
                    52,
                    244523000
                ]
            },
            "description": "I need counseling now....",
            "status": "PENDING",
            "apntmntTime": null
        },
        {
            "id": {
                "counselor": {
                    "id": 1,
                    "createdAt": [
                        2020,
                        2,
                        17,
                        9,
                        41,
                        31,
                        64306000
                    ],
                    "updatedAt": [
                        2020,
                        2,
                        17,
                        9,
                        41,
                        31,
                        64306000
                    ],
                    "name": "TestCounselor",
                    "description": "This account is for testing",
                    "specialty": "N/A",
                    "hospital": "N/A",
                    "city": "Colombo",
                    "photoUrl": "",
                    "loginCredentials": {
                        "id": 1,
                        "createdAt": [
                            2020,
                            2,
                            17,
                            9,
                            41,
                            30,
                            994492000
                        ],
                        "updatedAt": [
                            2020,
                            2,
                            17,
                            9,
                            41,
                            30,
                            994492000
                        ],
                        "username": "testCounselor",
                        "password": "password",
                        "email": "testCounselor@euphoria.io",
                        "enabled": true,
                        "authorities": null,
                        "accountNonLocked": true,
                        "credentialsNonExpired": true,
                        "accountNonExpired": true
                    }
                },
                "user": {
                    "gender": "M",
                    "email": "testUser@euphoria.io",
                    "password": null,
                    "nic": "2020000000000",
                    "city": "Colombo",
                    "district": "Colombo",
                    "pic_name": null,
                    "activated": "yes",
                    "deleted": false,
                    "status": null,
                    "uid": 1,
                    "first_name": "TestUserFN",
                    "last_name": "TestUserLN",
                    "contact_number": 19473554,
                    "date_of_birth": "2020-02-17",
                    "account_type": "formal",
                    "timestamp": 1581912691142
                },
                "createdAt": [
                    2020,
                    2,
                    17,
                    9,
                    41,
                    52,
                    244523000
                ]
            },
            "description": "I need counseling now....",
            "status": "PENDING",
            "apntmntTime": null
        },
        {
            "id": {
                "counselor": {
                    "id": 1,
                    "createdAt": [
                        2020,
                        2,
                        17,
                        9,
                        41,
                        31,
                        64306000
                    ],
                    "updatedAt": [
                        2020,
                        2,
                        17,
                        9,
                        41,
                        31,
                        64306000
                    ],
                    "name": "TestCounselor",
                    "description": "This account is for testing",
                    "specialty": "N/A",
                    "hospital": "N/A",
                    "city": "Colombo",
                    "photoUrl": "",
                    "loginCredentials": {
                        "id": 1,
                        "createdAt": [
                            2020,
                            2,
                            17,
                            9,
                            41,
                            30,
                            994492000
                        ],
                        "updatedAt": [
                            2020,
                            2,
                            17,
                            9,
                            41,
                            30,
                            994492000
                        ],
                        "username": "testCounselor",
                        "password": "password",
                        "email": "testCounselor@euphoria.io",
                        "enabled": true,
                        "authorities": null,
                        "accountNonLocked": true,
                        "credentialsNonExpired": true,
                        "accountNonExpired": true
                    }
                },
                "user": {
                    "gender": "M",
                    "email": "testUser@euphoria.io",
                    "password": null,
                    "nic": "2020000000000",
                    "city": "Colombo",
                    "district": "Colombo",
                    "pic_name": null,
                    "activated": "yes",
                    "deleted": false,
                    "status": null,
                    "uid": 1,
                    "first_name": "TestUserFN",
                    "last_name": "TestUserLN",
                    "contact_number": 19473554,
                    "date_of_birth": "2020-02-17",
                    "account_type": "formal",
                    "timestamp": 1581912691142
                },
                "createdAt": [
                    2020,
                    2,
                    17,
                    9,
                    41,
                    52,
                    244523000
                ]
            },
            "description": "I need counseling now....",
            "status": "PENDING",
            "apntmntTime": null
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case  actionTypes.COUNSELOR_SIGN_IN:
            return {
                ...state,
                signedIn: true
            };
        case actionTypes.GET_PATIENT_RECORDS:
            return {
                ...state,
                patientRecords: action.patientRecords
            };
        case actionTypes.GET_APPOINTMENTS:
            return {
                ...state,
                appointments: action.appointments
            };

        case actionTypes.GET_APPOINTMENTS:
            return {
                ...state,
                // appointments: action.appointments
            };
        default:
            return state;
    };
};
