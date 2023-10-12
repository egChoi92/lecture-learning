import {userDetail} from "constants/userDetail";

export default function handler(req, res) {
    const {uid} = req.query;
    const cookies = req.cookies;
    // res.status(200).json({name: `EG Choi ${uid} ${JSON.stringify(cookies)}`});
    // res.status(404).send({error: 'error'})  // 에러 반환
    res.redirect(307, '/api/user')  // 다른 API 주소로 리디렉션
}