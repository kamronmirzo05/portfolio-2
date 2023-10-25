import { CommentOutlined, InfoOutlined, GithubOutlined, InstagramOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { Link } from 'react-router-dom';


const FloatBtn = () => (
    <>


        <FloatButton.Group
            trigger="hover"
            type="primary"
            style={{
                right: "2%",
                bottom:"2%"
            }}
            icon={<InfoOutlined />}
        >

          <Link to='/a'>
              <FloatButton tooltip={<div>A</div>}  icon={<InstagramOutlined />} />
            </Link>
            <FloatButton tooltip={<div>Instagram</div>} href="https://www.instagram.com/khojiakbarbek/" icon={<InstagramOutlined />} />
            <FloatButton tooltip={<div>Telegram</div>} href='https://t.me/Xojiakbarbek' icon={<CommentOutlined />} />
            <FloatButton tooltip={<div>gitHub</div>} href="https://github.com/Khojiakbarbe" icon={<GithubOutlined />} />
        </FloatButton.Group>
    </>
);
export default FloatBtn;