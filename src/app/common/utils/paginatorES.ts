import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class paginatorES extends MatPaginatorIntl {

    override itemsPerPageLabel = 'Registros por Página';
    override nextPageLabel = 'Página Siguiente';
    override previousPageLabel = 'Página Anterior';
    override lastPageLabel = 'Última Página';
    override firstPageLabel = 'Primera Página';

    override getRangeLabel = (page: number, pageSize: number, length: number): string => {
        if (length === 0 || pageSize === 0) {
            return `0 de ${length}`;
        }

        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = Math.min(startIndex + pageSize, length);

        return `${startIndex + 1} - ${endIndex} de ${length}`;
    };
}
