import React, { PureComponent, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, BarChart, Bar, AreaChart, Area } from 'recharts';



const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <h1 className='text-center'>This is Dashboard</h1>

            <Container>
                <Row>
                    <Col>
                        <h3>Month wise Sell</h3>
                        {/* ----------------This is Line CHart ----------------- */}
                        <LineChart width={500} height={300} data={data}>
                            <Line type="monotone" dataKey={'sell'} stroke="#8884d8" strokeWidth={2} />
                            <XAxis dataKey={'month'}></XAxis>
                            <YAxis dataKey={'sell'}></YAxis>
                        </LineChart>
                    </Col>
                    <Col>
                        <h3>Investment Vs Revenue</h3>
                        {/* ------------------This is Bar Chart ----------------- */}
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis datkey={"month"} />
                            <YAxis dataKey="investment" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                        </BarChart>
                    </Col>
                </Row>
                <Row className='mt-5 mb-5'>
                    <Col>
                    <h3>Investment Vs Revenue</h3>
                        <AreaChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey={"month"} />
                            <YAxis dataKey={"investment"} />
                            <Tooltip dataKey="month" />
                            <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </Col>
                    <Col>
                    <h3>Investment Vs Revenue</h3>
                        <PieChart width={400} height={400}>
                            <Pie data={data} dataKey={'investment'} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                            <Pie data={data} dataKey={'revenue'} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        </PieChart>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Dashboard;