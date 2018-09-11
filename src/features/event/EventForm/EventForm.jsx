import React from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
class EventForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			event: {
				title: '',
				date: '',
				city: '',
				venue: '',
				hostedBy: ''
			}
		};
	}

	onFormSubmit = e => {
		e.preventDefault();
		console.log(this.state.event);
	};
	onInputChange = e => {
		// this.setState({ [e.target.name]: e.target.value });
		const newEvent = this.state.event;
		newEvent[e.target.name] = e.target.value;
		this.setState({
			event: newEvent
		});
	};
	handleCreateEvent = () => {
		this.props.createEvent(this.state.event);
	};
	render() {
		const { handleCancel } = this.props;
		const { event } = this.state;
		return (
			<Segment>
				<Form onSubmit={this.onFormSubmit}>
					<Form.Field>
						<label>Event Title</label>
						<input
							name="title"
							onChange={this.onInputChange}
							value={event.title}
							placeholder="First Name"
						/>
					</Form.Field>
					<Form.Field>
						<label>Event Date</label>
						<input
							name="date"
							onChange={this.onInputChange}
							type="date"
							placeholder="Event Date"
						/>
					</Form.Field>
					<Form.Field>
						<label>City</label>
						<input
							name="city"
							onChange={this.onInputChange}
							placeholder="City event is taking place"
						/>
					</Form.Field>
					<Form.Field>
						<label>Venue</label>
						<input
							name="venue"
							onChange={this.onInputChange}
							placeholder="Enter the Venue of the event"
						/>
					</Form.Field>
					<Form.Field>
						<label>Hosted By</label>
						<input
							name="hostedBy"
							onChange={this.onInputChange}
							placeholder="Enter the name of person hosting"
						/>
					</Form.Field>
					<Button
						onClick={this.handleCreateEvent}
						positive
						type="submit"
					>
						Submit
					</Button>
					<Button onClick={handleCancel} type="button">
						Cancel
					</Button>
				</Form>
			</Segment>
		);
	}
}

export default EventForm;
