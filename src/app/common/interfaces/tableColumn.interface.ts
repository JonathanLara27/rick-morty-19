export interface TableColumn {
    header: string;
    headerClass?: string;
    field: string;
    cellClass?: string;
    cellClass2?: (row: any) => string;
    type?: 'datetime' | 'url' ;
    subfield?: string; // Nueva propiedad opcional
}