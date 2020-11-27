import React from "react";
import { Col, Row, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BackPaginationComponent = () => {
	return (
		<div>
			<Row className="mb-2">
				<Col>
					<Link to="/">
						<Button color="dark">
							<FontAwesomeIcon icon={faArrowLeft} />
							Back
						</Button>
					</Link>
				</Col>
			</Row>
		</div>
	);
};

export default BackPaginationComponent;
