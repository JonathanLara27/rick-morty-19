import { HttpErrorResponse, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export function handleRequest(request: HttpRequest<unknown>, next: HttpHandlerFn) {
    return next(request).pipe(
        catchError((error: HttpErrorResponse) => handleError(error, request.url)),
    );
}

// Función para manejar errores
function handleError(error: HttpErrorResponse, url: string = '') {
    let errorMessage = 'Ocurrió un error inesperado.';
    if (!navigator.onLine) {
        errorMessage = 'No hay conexión a Internet.';
    } else if (error.status === 0) {
        errorMessage = 'No se pudo conectar al servidor. Por favor, intenta de nuevo más tarde.';
    } else {
        errorMessage = JSON.stringify(error.error?.data) ?? error.message ?? errorMessage;
    }
    return throwError(() => new Error(`${errorMessage} URL: ${url}`));
}