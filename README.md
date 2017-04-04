# Latchkey Child

#### An application to open up any intercom buzzer-based door opening system found a lot in New York City

## Main Components
1. Intercom with buzzer to open door
2. Raspberry Pi ( whatever version ) to host the application server ( LatchkeyServer )
3. Web browser or iOS device to use to activate the door opening

## System Architecture

### Back End ( Application Server )


### Front End ( Client )

## APIs supported on the backend ( Work in Progress. Subject to change )


### 1. Generate secure code

**Request type**    : POST

**Request URL**    : /generateCode

**Request Params** :

- phoneNumber  : < phone number to which text needs to be sent >

**Response** : Text with secure code

### 2. Open door

**Request type**   : POST

**Request URL**    : /unlock

**Request Params** :

- secureCode :  < generated secure code >

**Response** : Success message along with door buzzing open

### 3. Data for times door was unlocked in the last 'n' days

**Request type**   : GET

**Request URL**    : /data/:days

**Response** :
~~~~
{
  "data" : [
    "client":"Alfred Thomas",
    "clientType":"iOS",
    "datetime":"4/3/2017 14:00:03"
  ]
}
~~~~
