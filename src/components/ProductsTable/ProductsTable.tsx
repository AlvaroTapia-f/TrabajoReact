import { useEffect, useState } from "react"
import { Product } from "../../types/Product"
import { ProductService } from "../../services/ProductService";
import Loader from "../Loader/Loader";
import { Button, Table } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import ProductModal from "../ProductModal/ProductModal";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";

const ProductsTable = ()=>{
    //Variable que va a contener los datos recibidos por la API
    const [products, setProducts] = useState<Product[]>([]);

    //Variable que muestra el componente Loader hasta que se reciban los datos de la API
    const [isLoading, setIsLoading] = useState(true);

    //Variable que actualiza los datos de la tabla luego de una operacion
    const [refreshData, setRefreshData] = useState(false);

    //Agregando la variable en el useEffect cada vez que esta cambie el estado el useEffect va a buscar de nuevo los productos y por lo tanto se van a renderizar de nuevo.

    useEffect(()=>{
        const fetchProducts = async () =>{
            const data = await ProductService.getProducts();
            setProducts(data);
            setIsLoading(false);
        };
        fetchProducts();
    }, [refreshData]);

    const initializableNewProduct = (): Product =>{
    
        return {
            id: 0,
            title: '',
            price: 0,
            description: '',
            category: '',
            image: '',
        };
    };
    
    const [product, setProduct] = useState<Product>(initializableNewProduct);
    
    const [showModal, setShowModal] = useState(false);
    
    const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
    
    const [titulo, setTitulo] = useState('');
    
    const handleClick = (newTitle: string, product: Product, modal: ModalType) =>{
        setTitulo(newTitle);
        setModalType(modal);
        setProduct(product);
        setShowModal(true);
    };
        
    console.log(JSON.stringify(products, null, 2));

    return(
        <>
        <Button onClick={ ()=> handleClick("Nuevo Producto", initializableNewProduct(), ModalType.CREATE)}>Nuevo Producto</Button>
            {isLoading? <Loader/>: (
                <Table hover>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Precio</th>
                            <th>Descripción</th>
                            <th>Categoría</th>
                            <th>Imagen</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td><img src={product.image} alt={product.title} style={{maxBlockSize: '50px'}} /></td>
                                <td><EditButton onClick={()=>{handleClick("Editar Producto", product, ModalType.UPDATE)}}/></td>
                                <td><DeleteButton onClick={()=>{handleClick("Eliminar Producto", product, ModalType.DELETE)}}/></td>
                            </tr>
                        ) )}
                    </tbody>
                </Table>
            ) }

            {showModal && (<ProductModal show={showModal} onHide={()=>setShowModal(false)} title={titulo} modalType={modalType} product={product} refreshData={setRefreshData} />)}
        </>
    )
    
}

export default ProductsTable;