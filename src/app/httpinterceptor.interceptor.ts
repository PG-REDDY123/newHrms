import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable()
export class httpinterceptorInterceptor  implements HttpInterceptor {
  constructor(private authservice: AuthserviceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authservice.getToken();

    if (token) {
      // Clone the request and add the authorization header
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(token);

      // Pass the cloned request to the next handler
      return next.handle(clonedRequest);

    }

    // If there's no token, pass the original request along
    return next.handle(req);
  }
}



//import { HttpInterceptorFn } from '@angular/common/http';
//import { inject } from '@angular/core';
//import { AuthserviceService } from './authservice.service';
//import { HttpRequest } from '@angular/common/http';

//export const httpinterceptorInterceptor: HttpInterceptorFn = (req, next) => {
//  const authservice = inject(AuthserviceService);
//  const token = authservice.getToken();

//  if (token) {
//    const clonedRequest = req.clone({
//      setHeaders: {
//        Authorization: `Bearer ${token}`,
//      },
//    });

//    // Correctly pass next as a function
//    return next(clonedRequest);  // Ensure next is being passed correctly
//  }

//  // If no token, proceed with the original request
//  return next(req);  // Pass the request along
//};
