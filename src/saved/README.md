# Smart Home Automation System

## Tools Used
- **Programming Language**: Python
- **Framework**: Flask
- **Database**: SQLite
- **Frontend**: HTML, CSS, JavaScript
- **Hardware**: Raspberry Pi, Arduino, Various Sensors and Actuators
- **Communication**: MQTT Protocol

## Project Description

The Smart Home Automation System is designed to automate and control various aspects of a home environment. The system includes features such as temperature control, lighting management, security monitoring, and more. It utilizes a Raspberry Pi as the central controller, interfacing with various sensors and actuators via an Arduino. Communication between devices is handled using the MQTT protocol.

The project consists of the following components:
- **Backend**: A Flask-based web server that handles user requests and interacts with the database.
- **Database**: SQLite is used to store user preferences, device states, and sensor data.
- **Frontend**: A web-based interface built with HTML, CSS, and JavaScript for user interaction.
- **Hardware**: Raspberry Pi and Arduino for controlling and monitoring devices.

## Setup and Execution Steps

### Prerequisites
- Python 3.x
- Node.js
- MQTT Broker (e.g., Mosquitto)
- Raspberry Pi and Arduino with necessary sensors and actuators

### Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/smart-home-automation.git
   cd smart-home-automation
   ```

2. **Set Up Python Environment**
   ```sh
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

3. **Set Up Node.js Environment**
   ```sh
   npm install
   ```

4. **Configure MQTT Broker**
   - Install and configure Mosquitto on your Raspberry Pi.
   - Ensure the MQTT broker is running and accessible.

5. **Configure Hardware**
   - Connect the Arduino to the Raspberry Pi.
   - Wire the sensors and actuators to the Arduino.

### Execution

1. **Start the MQTT Broker**
   ```sh
   sudo systemctl start mosquitto
   ```

2. **Run the Flask Server**
   ```sh
   flask run
   ```

3. **Run the Frontend**
   ```sh
   npm start
   ```

4. **Access the Web Interface**
   - Open a web browser and navigate to `http://localhost:5000` to access the smart home automation interface.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please open an issue or contact the project maintainer.