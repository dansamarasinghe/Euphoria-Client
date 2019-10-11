
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" 
                    placeholder="Enter User Name" 
                    name="username"
                    value={this.state.username} 
                    onChange={this.onChange}
                    />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                
        
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> 