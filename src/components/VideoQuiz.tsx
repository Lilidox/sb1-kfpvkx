import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function VideoQuiz() {
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { t } = useTranslation();

  const handleAnswer = (answer: boolean) => {
    setAnswered(true);
    setIsCorrect(answer === true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 rounded-lg p-6 mt-4"
    >
      <h4 className="text-xl font-semibold text-white mb-4">{t('videoQuiz.title')}</h4>
      <p className="text-gray-300 mb-4">{t('videoQuiz.question')}</p>
      
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => handleAnswer(true)}
          disabled={answered}
          className={`px-6 py-3 rounded-lg transition-all duration-300 ${
            answered
              ? isCorrect
                ? 'bg-green-600 text-white'
                : 'bg-gray-600 text-gray-300'
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
        >
          {t('videoQuiz.answers.yes')}
        </button>
        <button
          onClick={() => handleAnswer(false)}
          disabled={answered}
          className={`px-6 py-3 rounded-lg transition-all duration-300 ${
            answered
              ? !isCorrect
                ? 'bg-red-600 text-white'
                : 'bg-gray-600 text-gray-300'
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
        >
          {t('videoQuiz.answers.no')}
        </button>
      </div>

      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-4 rounded-lg flex items-center gap-2 ${
            isCorrect ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
          }`}
        >
          {isCorrect ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              <span>{t('videoQuiz.feedback.correct')}</span>
            </>
          ) : (
            <>
              <XCircle className="w-5 h-5" />
              <span>{t('videoQuiz.feedback.incorrect')}</span>
            </>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}