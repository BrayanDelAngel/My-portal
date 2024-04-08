import { EmailTemplateMyPortal } from '../../../components/index';
import { Resend } from 'resend';
// Crea una instancia de la clase Resend
const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailTemplateMyPortalProps {
    name: string;
    email: string;
    phone: string;
    message: string;
}

// Define la función POST para manejar las solicitudes
export async function POST(request: Request, res: Response) {
    try {
        const formData = await request.json();
        const { name, email, phone, message }: EmailTemplateMyPortalProps = formData;
        // Verifica que los datos necesarios estén presentes
        if (!email || !message || !name || !phone) {
            return Response.json({ error: 'Falta información requerida en el cuerpo de la petición.' }, { "status": 400 })
        }
        // Envía el correo electrónico utilizando los datos proporcionados
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',//Origen
            to: ['brayanefra0@gmail.com'],//Destinatario
            subject: 'Tu página web de Desarrollador',//Asunto
            react: EmailTemplateMyPortal({ name, email, message, phone }),
        });

        if (error) {
            Response.json({ error }, { "status": 500 });
        }
        // Devuelve una respuesta exitosa
        return Response.json({ message: 'Correo electrónico enviado exitosamente.' }, { "status": 200 })
    } catch (error) {
        return Response.json({ error: 'Ocurrió un error al enviar el correo electrónico.' }, { "status": 500 });
    }
}
