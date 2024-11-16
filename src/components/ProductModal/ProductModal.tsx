import { Button, Form, FormLabel, Modal, ModalBody } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import { Product } from "../../types/Product";

//Dependencias para validar formularios
import * as Yup from "yup";
import { useFormik } from "formik";
import { ProductService } from "../../services/ProductService";

//Notificaciones al usuario
import { toast } from "react-toastify";

type ProductModalProps = {
    show: boolean;
    onHide: () => void;
    title: string;
    modalType: ModalType;
    product: Product;
    refreshData: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductModal = ({show, onHide, title, modalType, product, refreshData}: ProductModalProps)=>{

    const handleSaveUpdate = async (product: Product) =>{
        try{
            const isNew = product.id === 0;
            if(isNew){
                await ProductService.createProduct(product);
            } else{
                await ProductService.updateProduct(product.id, product);
            }
            toast.success(isNew ? "Producto creado" : "Producto actualizado",{
                position: "top-center",
            });

            onHide();
            refreshData(prevState => !prevState);
        } catch (error){
            console.error(error);
            toast.error("Ha ocurrido un error")
        }
    };

    const handleDelete = async()=>{
        try {
            await ProductService.deleteProduct(product.id);
            toast.success("Producto eliminado con éxito",{
                position: "top-center",
            });
            onHide();
            refreshData(prevState => !prevState);
        } catch (error) {
            console.error(error);
            toast.error("Ha ocurrido un error")
        }
    }

    //YUP, esquema de validacion
    const validationSchema = ()=>{
        return Yup.object().shape({
            id: Yup.number().min(0),
            title: Yup.string().required('El título es requerido'),
            price: Yup.number().min(0).required('El precio es requerido'),
            description: Yup.string().min(0).required('La decripción es requerida'),
            category: Yup.string().required('La categoría es requerida'),
            image: Yup.string().required('La URL de la imagen es requerida'),
        });
    };

    //Formik, utiliza el esquema de validacion para crear un formulario dinámico
    const formik = useFormik({
        initialValues: product,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: Product) => handleSaveUpdate(obj),
    });

    return(
        <>
            {modalType === ModalType.DELETE? (
                <>
                <Modal show={show} onHide={onHide} centered backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title> {title} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>¿Seguro que desea eliminar el producto <b><strong> {product.title} </strong></b> ?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                        <Button variant="danger" onClick={handleDelete}>Borrar</Button>
                    </Modal.Footer>
                </Modal>
                </>
            ) : (
                <>
                <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-x1">
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <ModalBody>
                        <Form onSubmit={formik.handleSubmit}>

                            <Form.Group controlId="formTitle">
                                <FormLabel> Título </FormLabel>
                                <Form.Control 
                                name="title" 
                                type="text" 
                                value={formik.values.title || ''} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.title && formik.touched.title)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.title}
                                </Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group controlId="formPrice">
                                <FormLabel> Precio </FormLabel>
                                <Form.Control 
                                name="price" 
                                type="number" 
                                value={formik.values.price || ''} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.price && formik.touched.price)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.price}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formDescription">
                                <FormLabel> Descripción </FormLabel>
                                <Form.Control 
                                name="description" 
                                type="text" 
                                value={formik.values.description || ''} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.description && formik.touched.description)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.description}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formCategoty">
                                <FormLabel> Categoría </FormLabel>
                                <Form.Control 
                                name="category" 
                                type="text" 
                                value={formik.values.category || ''} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.category && formik.touched.category)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.category}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formImage">
                                <FormLabel> Imagen </FormLabel>
                                <Form.Control 
                                name="image" 
                                type="text" 
                                value={formik.values.image || ''} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.image && formik.touched.image)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.image}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Modal.Footer className="mt-4">
                                <Button variant="secondary" onClick={onHide}>Cancelar</Button>
                                <Button variant="primary" type="submit" disabled={!formik.isValid}>Guardar</Button>
                            </Modal.Footer>
                        </Form>
                    </ModalBody>
                </Modal>
                </>
            )}
        </>
    )
}

export default ProductModal;