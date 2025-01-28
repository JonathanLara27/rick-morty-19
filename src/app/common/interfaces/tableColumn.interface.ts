export interface TableColumn {
    header: string;
    headerClass?: string;
    field: string;
    cellClass?: string;
    cellClass2?: (row: any) => void;
    type?: 'date' | 'dateHora' | 'array' | 'url' ;
    subfield?: string; // Nueva propiedad opcional
}