import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import EvaluationPage from './pages/EvaluationPage';
import './App.css';

// 模拟数据
const mockSubmissions = [
  { id: 1, name: '张三', course: '高等数学', teacher: '张教授', gain: '学会了微积分基础', content: '导数与微分', date: '2024-01-15', rating: 4 },
  { id: 2, name: '李四', course: '数据结构', teacher: '李教授', gain: '理解了二叉树遍历', content: '树与二叉树', date: '2024-01-14', rating: 5 },
  { id: 3, name: '王五', course: '大学英语', teacher: '王老师', gain: '提高了口语表达能力', content: '英语口语练习', date: '2024-01-13', rating: 3 },
  { id: 4, name: '赵六', course: '计算机组成原理', teacher: '赵教授', gain: '了解了CPU工作原理', content: '中央处理器结构', date: '2024-01-12', rating: 4 },
  { id: 5, name: '钱七', course: '软件工程', teacher: '钱教授', gain: '掌握了敏捷开发流程', content: '敏捷开发方法论', date: '2024-01-11', rating: 5 },
];

function App() {
  const [submissions, setSubmissions] = useState(mockSubmissions);
  
  const addSubmission = (newSubmission) => {
    const submissionWithId = {
      ...newSubmission,
      id: submissions.length + 1,
      date: new Date().toISOString().split('T')[0]
    };
    setSubmissions([submissionWithId, ...submissions]);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage submissions={submissions} />} />
          <Route path="/history" element={<HistoryPage submissions={submissions} />} />
          <Route path="/evaluation" element={<EvaluationPage addSubmission={addSubmission} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;