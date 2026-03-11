import { Layout, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const Dashboard = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* Header cơ bản */}
            <Header style={{ color: 'white', textAlign: 'center' }}>
                <Title level={3} style={{ color: 'white', margin: '16px 0' }}>
                    Header Dashboard
                </Title>
            </Header>

            <Content style={{ padding: '20px 50px' }}>
                <div style={{
                    background: '#fff',
                    padding: 24,
                    minHeight: 400,
                    borderRadius: '8px',
                    border: '1px dashed #ccc',
                    textAlign: 'center'
                }}>
                    Nội dung Content sẽ hiển thị ở đây
                </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>
                Footer ©2026 Created by Bui Quang Cong
            </Footer>
        </Layout>
    );
};

export default Dashboard;