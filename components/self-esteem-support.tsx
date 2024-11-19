'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Phone, AlertTriangle, Heart, ArrowRight, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

export function SelfEsteemSupportComponent() {
  const [showForm, setShowForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizScore, setQuizScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [dailyAffirmation, setDailyAffirmation] = useState("")
  const [showTip, setShowTip] = useState(false)
  const [tipIndex, setTipIndex] = useState(0)

  const quizQuestions = [
    { question: "Eu me sinto confiante na maioria das situações.", positive: true },
    { question: "Eu frequentemente me comparo desfavoravelmente com os outros.", positive: false },
    { question: "Eu acredito que sou capaz de alcançar meus objetivos.", positive: true },
    { question: "Eu tenho dificuldade em aceitar elogios.", positive: false },
    { question: "Eu me sinto bem comigo mesmo(a) na maior parte do tempo.", positive: true },
  ]

  const affirmations = [
    "Eu sou digno(a) de amor e respeito.",
    "Cada dia é uma nova oportunidade para crescer.",
    "Meus pensamentos e opiniões têm valor.",
    "Eu sou capaz de superar desafios.",
    "Eu aceito e amo quem eu sou.",
  ]

  const selfEsteemTips = [
    "Pratique a autoaceitação diariamente.",
    "Estabeleça metas realistas e celebre suas conquistas.",
    "Cuide de sua saúde física e mental.",
    "Aprenda a dizer não e estabeleça limites saudáveis.",
    "Cultive relacionamentos positivos e de apoio.",
  ]

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * affirmations.length)
    setDailyAffirmation(affirmations[randomIndex])
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setShowForm(false)
    }, 3000)
  }

  const handleQuizAnswer = (answer: boolean) => {
    if (answer === quizQuestions[currentQuestion].positive) {
      setQuizScore(quizScore + 1)
    }
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setQuizScore(0)
    setCurrentQuestion(0)
    setQuizCompleted(false)
    setShowQuiz(false)
  }

  const showNextTip = () => {
    setTipIndex((prevIndex) => (prevIndex + 1) % selfEsteemTips.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <header className="bg-yellow-800 shadow-md sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-yellow-100">+Estima</div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-yellow-200 hover:underline hover:text-yellow-50 transition duration-300">Home</a>
              <a href="#about" className="text-yellow-200 hover:underline hover:text-yellow-50 transition duration-300">Sobre</a>
              <a href="#risks" className="text-yellow-200 hover:underline hover:text-yellow-50 transition duration-300">Riscos</a>
              <a href="#contact" className="text-yellow-200 hover:underline hover:text-yellow-50 transition duration-300">Contato</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-6 py-16 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-yellow-900"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Você Merece Se Amar
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-yellow-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Juntos, podemos construir uma autoestima mais forte e uma vida mais feliz.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              onClick={() => setShowQuiz(true)}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Faça o Quiz de Autoestima
            </Button>
            <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-yellow-700">Afirmação do Dia</h3>
              <p className="text-yellow-900">{dailyAffirmation}</p>
            </div>
          </motion.div>
        </section>

        <section id="about" className="bg-yellow-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-yellow-900">O Que é Baixa Autoestima?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-yellow-800 mb-4">
                  Baixa autoestima é uma percepção negativa de si mesmo que pode afetar todos os aspectos da vida. 
                  Pessoas com baixa autoestima frequentemente:
                </p>
                <ul className="list-disc list-inside text-yellow-800">
                  <li>Sentem-se inadequadas ou inferiores</li>
                  <li>Têm dificuldade em aceitar elogios</li>
                  <li>Temem falhar ou decepcionar os outros</li>
                  <li>Evitam desafios e novas experiências</li>
                </ul>
              </div>
              <div className="bg-yellow-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-yellow-800">Você Sabia?</h3>
                <p className="text-yellow-900">
                  A autoestima não é fixa! Com as ferramentas e o apoio certos, você pode melhorar sua autoestima 
                  e viver uma vida mais plena e satisfatória.
                </p>
                <Button 
                  className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white"
                  onClick={() => setShowTip(true)}
                >
                  Dica de Autoestima
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="risks" className="py-16 bg-yellow-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-yellow-900">Riscos da Baixa Autoestima</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Depressão e Ansiedade", description: "Aumenta o risco de desenvolver transtornos de humor." },
                { title: "Relacionamentos Prejudicados", description: "Dificulta a formação e manutenção de relações saudáveis." },
                { title: "Desempenho Reduzido", description: "Pode afetar negativamente o desempenho escolar ou profissional." }
              ].map((risk, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AlertTriangle className="w-12 h-12 text-red-700 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-yellow-800">{risk.title}</h3>
                  <p className="text-yellow-700">{risk.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-yellow-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Precisa Conversar?</h2>
            <div className="flex flex-col items-center justify-center space-y-4">
              <Phone className="w-16 h-16" />
              <p className="text-2xl font-semibold">Ligue Agora: 0800 257 4070</p>
              <p>Atendimento 24 horas, 7 dias por semana. Sua ligação é confidencial e gratuita.</p>
            </div>
          </div>
        </section>

        <AnimatePresence>
          {showForm && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white rounded-lg p-8 max-w-md w-full relative"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
              >
                <button 
                  onClick={() => setShowForm(false)} 
                  className="absolute top-2 right-2 text-yellow-500 hover:text-yellow-700"
                >
                  <X className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold mb-4 text-yellow-800">Agende sua Consulta</h2>
                {formSubmitted ? (
                  <div className="text-green-600 font-semibold">
                    Agendamento realizado com sucesso! Entraremos em contato em breve.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-yellow-800">Nome</Label>
                      <Input id="name" required className="border-yellow-300 focus:border-yellow-500" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-yellow-800">Email</Label>
                      <Input id="email" type="email" required className="border-yellow-300 focus:border-yellow-500" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-yellow-800">Telefone</Label>
                      <Input id="phone" type="tel" required className="border-yellow-300 focus:border-yellow-500" />
                    </div>
                    <div>
                      <Label className="text-yellow-800">Preferência de Contato</Label>
                      <RadioGroup defaultValue="phone" className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="contact-phone" />
                          <Label htmlFor="contact-phone" className="text-yellow-800">Telefone</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="contact-email" />
                          <Label htmlFor="contact-email" className="text-yellow-800">Email</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-yellow-800">Mensagem (opcional)</Label>
                      <Textarea id="message" className="border-yellow-300 focus:border-yellow-500" />
                    </div>
                    <div className="flex justify-end space-x-4">
                      <Button type="button" variant="outline" onClick={() => setShowForm(false)} className="border-yellow-500 text-yellow-700 hover:bg-yellow-50">
                        Cancelar
                      </Button>
                      <Button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white">Agendar</Button>
                    </div>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showQuiz && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white rounded-lg p-8 max-w-md w-full"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-yellow-800">Quiz de Autoestima</h2>
                {!quizCompleted ? (
                  <>
                    <p className="mb-4 text-yellow-700">{quizQuestions[currentQuestion].question}</p>
                    <div className="space-y-2">
                      <Button onClick={() => handleQuizAnswer(true)} className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">Concordo</Button>
                      <Button onClick={() => handleQuizAnswer(false)} className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">Discordo</Button>
                    </div>
                    <Progress value={(currentQuestion + 1) / quizQuestions.length * 100} className="mt-4" />
                  </>
                ) : (
                  <div className="text-center">
                    <p className="text-xl mb-4 text-yellow-800">Sua pontuação: {quizScore} de {quizQuestions.length}</p>
                    <p className="mb-4 text-yellow-700">
                      {quizScore <= 2 ? "Sua autoestima pode estar baixa. Considere buscar ajuda profissional." :
                       quizScore <= 4 ? "Sua autoestima está moderada. Há espaço para melhorias!" :
                       "Parabéns! Você tem uma boa autoestima. Continue assim!"}
                    </p>
                    <Button onClick={resetQuiz} className="bg-yellow-600 hover:bg-yellow-700 text-white">Refazer Quiz</Button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showTip && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white rounded-lg p-8 max-w-md w-full"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-yellow-700">Dica de Autoestima</h2>
                <p className="text-yellow-800 mb-4">{selfEsteemTips[tipIndex]}</p>
                <div className="flex justify-between">
                  <Button onClick={showNextTip} className="bg-yellow-600 hover:bg-yellow-700 text-white">Próxima Dica</Button>
                  <Button variant="outline" onClick={() => setShowTip(false)} className="border-yellow-500 text-yellow-700 hover:bg-yellow-50">Fechar</Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-yellow-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">+Estima</h3>
              <p>Construindo autoestima, uma pessoa de cada vez.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-200 transition duration-300">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-yellow-200 transition duration-300">
                Política de Privacidade
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button 
              onClick={() => setShowForm(true)}
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Agende uma Consulta
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            © {new Date().getFullYear()} +Estima. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}