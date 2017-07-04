## User stories

- As a PBO I want to have store inspection requests digitally so that I can check them remotely

- As a PBO I want to be able to allocate how many officers will be doing inspection on a day so that I distribute my human resources optimally

- As a PBO I want to know in real time when a client is requesting a booking so that I can gage how much inspection work needs to be carried out.

- As a PBO I want to know which days are typically busy with inspection requests so I can allocate my resources accordingly

- As a PBO I want to know what times are typically requested by clients to conduct inspections so that I can allocate my resources accordingly

- As a PBO I want to plan in advance how many officers will be available for inspection so that I can plan for training and vacation times

- As a PBO I want to confirm the booking with the client so that both parties are confirmed

- As a client I want to be able to book a quarantine appointment online so I don't have to call and wait for someone to pick up the phone

- As a client I want to have my data kept privately so that the public or competitors see my activities

- As a client I want to keep track of my appointments with Quarantine so that I know when officers are coming

- As a client I want to verify which inspections were conducted so that I can check if I'm being audited


## Wireframes

* Client interface
- What the client views when reaching the site [here](https://preview.ibb.co/kexrHv/Robo_Ruth1.png).

- What the client sees he/she makes a booking. This shows the booking [granularity](https://preview.ibb.co/mV9cqF/Robo_Ruth2.png)

- Sign up - Sign In system [here](https://image.ibb.co/gmcK4a/Robo_Ruth3.png)

* Internal (Biosecurity) interface
- What the PBO (Principal Biosecurity Officer) has to manage AQPs (Approved Quarantine Place) [here](https://preview.ibb.co/e1XxqF/Robo_Ruth4.png)

- What the PBO sees to manage [bookings](https://preview.ibb.co/j0XDVF/Robo_Ruth6.png)


## Models

* The bookings have an id, a clientId, an inspectionType, an entryNumber, a noteToOfficer, a startTime and the possibility to attach documents.

* A Person has a first name, a last name and a contact phone number.

* A Company has a name, an AQP number and a geo-location (currently as string but will need geolocation)

* An inspection works as an enum for drop down purpose in the booking section



## CRUD

* Booking
* Person
* Company


## Available Scripts

In the project directory, you can run:

### `npm start` in the react-web folder

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm dev` in the api folder

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
