import axios from 'axios';
import React, { useState } from 'react';
import CustomSelect from "./select";
import workIcon from "../assets/workIcon.svg";
import {devWorkTypes, industriesTypes} from "../assets/selectOptions";
import categoryIcon from "../assets/categoryIcon.svg";

const GigaChatComponent = () => {
    const [typeWork, setTypeWork] = useState('');
    const [industry, setIndustry] = useState('');
    const [response, setResponse] = useState('');

    const handleSendMessage = async () => {
        try {
            const apiKey = process.env.REACT_APP_GIGACHAT_API_KEY;
            const response = await axios.post('https://gigachat.devices.sberbank.ru/api/v1/chat/completions', {
                model: 'GigaChat-Pro',
                messages: [
                    {
                        role: 'user',
                        content: `Prompt: необходимо придумать техническое задание используя следующие данные. Тип работы: ${typeWork}, Отрасль: ${industry}
Название организации: [Введите придуманное название вашей организации]
Деятельность организации: [Укажите область деятельности вашей организации - например, разработка программного обеспечения, её целевая аудитория, дизайн, маркетинг и т.д.]
Основная задача и её описание: [Распишите подробно основную задачу вашей организации. Включите детали, такие как основные цвета, количество экранов (если это связано с вашей задачей), функциональные требования и другие важные аспекты.]`
                    }
                ],
                n: 1,
                stream: false,
                max_tokens: 512,
                repetition_penalty: 1,
                update_interval: 0
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }
                //httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false })
            });

            console.log('API Response:', response.data);
            setResponse(response.data.choices[0].message.content);
        } catch (error) {
            console.error('Error sending message:', error);
            setResponse(`Error: Unable to get response from GigaChat API. ${error.message}`);
        }
    };

    return (
        <div>
            <h1>GigaChat</h1>
                <CustomSelect selectedIcon={workIcon} label={'Тип работы'} options={devWorkTypes} onSelect={setTypeWork}/>
                <CustomSelect selectedIcon={categoryIcon} label={'Отрасль'} options={industriesTypes} onSelect={setIndustry}/>
                <button onClick={handleSendMessage}>Send</button>
            <div>
                <h2>Response:</h2>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default GigaChatComponent