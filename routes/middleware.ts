import { NextFunction, Request, Response } from 'express';


const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        next(); 
    } else {
        res.status(401).send('로그인 해주세요');
    }
}; 

const isNotLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAuthenticated()) {
        next(); 
    } else {
        res.status(401).send('로그인한 사용자는 접근 할 수 없음'); 
    }
};

export { isLoggedIn, isNotLoggedIn }; 
     