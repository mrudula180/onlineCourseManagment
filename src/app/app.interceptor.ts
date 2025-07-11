// json-server --watch db.json --port 3000
// to start the mock server
import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
const BASEURL = 'http://localhost:3000/';

export const baseUrlInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const reqClone = req.clone({
        url: BASEURL + req.url
    })
    return next(reqClone)
}