export interface TableColumn {
    header: string;
    field: string;
    cellClass?: string;
    cellClass2?: (row: any) => void;
    type?: 'date' | 'dateHora' | 'array' ;
    subfield?: string; // Nueva propiedad opcional
}