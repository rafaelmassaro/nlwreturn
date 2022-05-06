import { Router } from 'express'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepositry } from './repositories/prisma/prisma-feedback-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = Router()

routes.post('/feedbacks', async (req, res) => {
    const { type, comment,screenshot } = req.body;

    const prismaFeebackRepository =  new PrismaFeedbacksRepositry()
    const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeebackRepository,
        nodemailerMailAdapter
    )

    await submitFeedbackUseCase.execute({
            type,
            comment,
            screenshot
        }
    )

    return res.status(201).send();
})