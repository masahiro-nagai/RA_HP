import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  ArrowRight, 
  ArrowDown,
  Zap, 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  Code, 
  Brain, 
  Rocket,
  Mail,
  Phone,
  MapPin,
  Star,
  Award,
  CheckCircle,
  Menu,
  X,
  Building,
  Briefcase,
  UserPlus,
  ChevronDown
} from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNewsCategory, setActiveNewsCategory] = useState('all');

  // Statistics counter animation
  const [stats, setStats] = useState({
    continuationRate: 0,
    satisfaction: 0,
    aiProjectRatio: 0,
    avgSalaryIncrease: 0,
    avgWorkPeriod: 0
  });

  useEffect(() => {
    const targetStats = {
      continuationRate: 92,
      satisfaction: 4.6,
      aiProjectRatio: 48,
      avgSalaryIncrease: 12,
      avgWorkPeriod: 19
    };

    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          continuationRate: Math.round(targetStats.continuationRate * progress),
          satisfaction: Math.round(targetStats.satisfaction * progress * 10) / 10,
          aiProjectRatio: Math.round(targetStats.aiProjectRatio * progress),
          avgSalaryIncrease: Math.round(targetStats.avgSalaryIncrease * progress),
          avgWorkPeriod: Math.round(targetStats.avgWorkPeriod * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'stats-section') {
          animateStats();
        }
      });
    });

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const newsCategories = [
    { id: 'all', label: '全て' },
    { id: 'announcement', label: '最新公告' },
    { id: 'news', label: 'ニュース発表' },
    { id: 'recruit', label: '採用について' }
  ];

  const newsItems = [
    {
      date: '2024.10.30',
      category: 'announcement',
      title: 'AI開発エンジニア積極採用中！経験者優遇'
    },
    {
      date: '2024.10.25',
      category: 'news',
      title: '大手製造業向けAI画像解析システムの開発完了'
    },
    {
      date: '2024.10.20',
      category: 'recruit',
      title: '11月度会社説明会開催のお知らせ'
    },
    {
      date: '2024.10.15',
      category: 'news',
      title: 'ChatGPT Enterprise導入による開発効率向上について'
    },
    {
      date: '2024.10.10',
      category: 'announcement',
      title: 'フルリモート案件の拡充について'
    }
  ];

  const filteredNews = activeNewsCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeNewsCategory);

  const teamMembers = [
    {
      name: "田中 太郎",
      role: "AI エンジニア",
      comment: "AI案件に挑戦できる環境が整っています",
      image: "👨‍💻"
    },
    {
      name: "佐藤 花子",
      role: "フルスタックエンジニア", 
      comment: "希望をしっかり聞いてくれる会社です",
      image: "👩‍💻"
    },
    {
      name: "山田 次郎",
      role: "インフラエンジニア",
      comment: "技術的な成長を実感できる環境です",
      image: "👨‍🔧"
    },
    {
      name: "鈴木 美咲",
      role: "データサイエンティスト",
      comment: "最新技術に触れられる機会が豊富です",
      image: "👩‍🔬"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Treasure.inc style */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 treasure-orange-bg rounded-lg flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-treasure">Radiant Arrow Inc.</h1>
                <p className="text-xs text-gray-600">CORPORATE & RECRUITING SITE</p>
              </div>
            </div>
            
            {/* Desktop Navigation with CTA buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="default" 
                className="treasure-orange-bg hover:opacity-90 text-white font-medium px-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                IT エンジニア募集
              </Button>
              <Button 
                variant="default" 
                className="treasure-orange-bg hover:opacity-90 text-white font-medium px-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                AI 技術者募集
              </Button>
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
              <div className="flex flex-col space-y-3">
                <Button 
                  variant="default" 
                  className="treasure-orange-bg hover:opacity-90 text-white font-medium w-full"
                  onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}
                >
                  IT エンジニア募集
                </Button>
                <Button 
                  variant="default" 
                  className="treasure-orange-bg hover:opacity-90 text-white font-medium w-full"
                  onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}
                >
                  AI 技術者募集
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section - Treasure.inc style split layout */}
      <section className="pt-20 min-h-screen flex items-center">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 min-h-[80vh]">
            {/* Left side - Orange background with text */}
            <div className="treasure-orange-bg flex items-center justify-center p-8 lg:p-16">
              <div className="text-center text-white space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  放つ技術力。<br />
                  導く未来。
                </h1>
                <p className="text-xl lg:text-2xl opacity-90">
                  AI × SES で<br />
                  エンジニアの価値を最大化
                </p>
                <div className="pt-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Radiant Arrow Inc.
                  </Badge>
                </div>
              </div>
            </div>

            {/* Right side - Dark wood background with treasure chest */}
            <div className="wood-dark-bg flex items-center justify-center p-8 lg:p-16 relative">
              <div className="text-center text-white space-y-6">
                {/* Treasure chest icon representation */}
                <div className="w-32 h-32 mx-auto mb-8 relative">
                  <div className="w-full h-full treasure-orange-bg rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <Zap className="w-16 h-16 text-white" />
                    {/* Floating coins effect */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-yellow-300 rounded-full opacity-60"></div>
                    <div className="absolute top-1/2 -right-3 w-4 h-4 bg-yellow-500 rounded-full opacity-70"></div>
                  </div>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold">
                  エンジニア一人ひとりの<br />
                  キャリアを光で照らし、<br />
                  未来へ導く会社
                </h2>
                <p className="text-lg opacity-80">
                  透明性の高い案件選択制度と<br />
                  AI技術への積極投資で<br />
                  あなたの成長を支援します
                </p>
              </div>
              
              {/* Scroll indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col items-center space-y-2 text-white/60">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <ArrowDown className="w-5 h-5 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keep on smiling section - Centered content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Keep on smiling</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            私たちラディアントアロー株式会社は、「エンジニアにとって正しい環境をつくる」という理念のもと、
            AI技術とSES事業を融合させた新しい形の企業として、エンジニア一人ひとりが笑顔で働ける環境を提供しています。
            光（Radiant）は透明性を、矢（Arrow）は成長を表し、あなたのキャリアを明るい未来へと導きます。
          </p>
        </div>
      </section>

      {/* Three main sections - COMPANY, BUSINESS, RECRUIT */}
      <section className="space-y-0">
        {/* COMPANY Section */}
        <div className="grid lg:grid-cols-2 min-h-[60vh]">
          <div className="company-red-bg flex items-center justify-center p-8 lg:p-16">
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold">COMPANY</h2>
              <p className="text-xl leading-relaxed">
                多様性を重視し、エンジニア一人ひとりの<br />
                個性と技術力を大切にする企業文化。<br />
                透明性の高い経営と、社員の成長を<br />
                第一に考える組織づくりを実践しています。
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>透明性の高い経営方針</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>多様性を重視した採用</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>社員の成長を第一に考える文化</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white flex items-center justify-center p-8 lg:p-16">
            <div className="text-center">
              <Building className="w-32 h-32 mx-auto text-gray-300 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">企業理念</h3>
              <p className="text-gray-600">
                光＝透明性 / Arrow＝成長<br />
                エンジニアにとって正しい環境をつくる
              </p>
            </div>
          </div>
        </div>

        {/* BUSINESS Section */}
        <div className="grid lg:grid-cols-2 min-h-[60vh]">
          <div className="bg-white flex items-center justify-center p-8 lg:p-16 order-2 lg:order-1">
            <div className="text-center">
              <Briefcase className="w-32 h-32 mx-auto text-gray-300 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">事業内容</h3>
              <p className="text-gray-600">
                AI開発支援・SES事業・<br />
                AI導入コンサルティング
              </p>
            </div>
          </div>
          <div className="business-blue-bg flex items-center justify-center p-8 lg:p-16 order-1 lg:order-2">
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold">BUSINESS</h2>
              <p className="text-xl leading-relaxed">
                AI技術を軸とした3つの事業領域で、<br />
                企業とエンジニアの成長を支援。<br />
                最新技術への積極投資と、<br />
                楽しさを追求した開発環境を提供します。
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5" />
                  <span>AI開発支援（PoC〜運用まで）</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5" />
                  <span>SES事業（案件選択制度あり）</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5" />
                  <span>AI導入コンサルティング</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RECRUIT Section */}
        <div className="grid lg:grid-cols-2 min-h-[60vh]">
          <div className="recruit-green-bg flex items-center justify-center p-8 lg:p-16">
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold">RECRUIT</h2>
              <p className="text-xl leading-relaxed">
                エンジニアが夢を実現できる場を提供。<br />
                成長プラットフォームとして、<br />
                一人ひとりのキャリアアップを<br />
                全力でサポートします。
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5" />
                  <span>案件選択制度の透明性</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5" />
                  <span>AIスキルアップ支援</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5" />
                  <span>専任キャリアアドバイザー</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white flex items-center justify-center p-8 lg:p-16">
            <div className="text-center">
              <UserPlus className="w-32 h-32 mx-auto text-gray-300 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">働く環境</h3>
              <p className="text-gray-600">
                エンジニアが安心して<br />
                成長できる環境を整備
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">INTERVIEW</h2>
            <p className="text-xl text-gray-600">
              実際に働くメンバーの声をお聞きください
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{member.image}</div>
                  <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-treasure font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm italic">"{member.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="treasure-orange-bg hover:opacity-90 text-white px-8 py-3">
              インタビュー
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">NEWS</h2>
            <p className="text-xl text-gray-600">
              最新のお知らせ・ニュース
            </p>
          </div>

          {/* News category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {newsCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveNewsCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeNewsCategory === category.id
                    ? 'treasure-orange-bg text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* News list */}
          <div className="max-w-4xl mx-auto space-y-4 mb-12">
            {filteredNews.map((news, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                <div className="text-gray-500 text-sm font-mono min-w-[80px]">
                  {news.date}
                </div>
                <Badge 
                  variant="secondary" 
                  className={`text-xs ${
                    news.category === 'announcement' ? 'bg-blue-100 text-blue-800' :
                    news.category === 'news' ? 'bg-green-100 text-green-800' :
                    'bg-orange-100 text-orange-800'
                  }`}
                >
                  {newsCategories.find(cat => cat.id === news.category)?.label}
                </Badge>
                <div className="flex-1 text-gray-800">
                  {news.title}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="treasure-orange-bg hover:opacity-90 text-white px-8 py-3">
              お知らせ
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">数字で見るラディアントアロー</h2>
            <p className="text-xl text-gray-600">
              実績と信頼の数字が、私たちの価値を物語ります
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-treasure mb-2">
                  {stats.continuationRate}%
                </div>
                <p className="text-gray-600 font-medium">案件継続率</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-treasure mb-2">
                  {stats.satisfaction}
                </div>
                <p className="text-gray-600 font-medium">エンジニア満足度</p>
                <div className="flex justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-treasure mb-2">
                  {stats.aiProjectRatio}%
                </div>
                <p className="text-gray-600 font-medium">AI案件比率</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-treasure mb-2">
                  +{stats.avgSalaryIncrease}万円
                </div>
                <p className="text-gray-600 font-medium">平均年収UP</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-treasure mb-2">
                  {stats.avgWorkPeriod}ヶ月
                </div>
                <p className="text-gray-600 font-medium">平均稼働期間</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Recruitment CTA with background image */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              一緒に未来を創造しませんか？
            </h2>
            <p className="text-xl">
              ラディアントアローで、あなたの技術力を光らせ、<br />
              AI時代の最前線で活躍する未来への矢を放ちましょう。
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 treasure-orange-bg rounded-full flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">IT エンジニア</h3>
                  <p className="text-white/80 mb-4">
                    Web開発・インフラ・データ分析など<br />
                    幅広い技術領域で活躍
                  </p>
                  <Button className="treasure-orange-bg hover:opacity-90 text-white">
                    募集要項
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 treasure-orange-bg rounded-full flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">AI 技術者</h3>
                  <p className="text-white/80 mb-4">
                    機械学習・深層学習・生成AI<br />
                    最先端AI技術の開発
                  </p>
                  <Button className="treasure-orange-bg hover:opacity-90 text-white">
                    募集要項
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">お問い合わせ・エントリー</h2>
            <p className="text-xl text-gray-600">
              まずはお気軽にご相談ください。あなたのキャリアを一緒に考えましょう。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>お問い合わせフォーム</CardTitle>
                <CardDescription>
                  ご質問やご相談がございましたら、お気軽にお問い合わせください。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="lastName">姓</Label>
                    <Input id="lastName" placeholder="山田" />
                  </div>
                  <div>
                    <Label htmlFor="firstName">名</Label>
                    <Input id="firstName" placeholder="太郎" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input id="email" type="email" placeholder="example@email.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">電話番号</Label>
                  <Input id="phone" type="tel" placeholder="090-1234-5678" />
                </div>
                
                <div>
                  <Label htmlFor="subject">件名</Label>
                  <Input id="subject" placeholder="お問い合わせの件名" />
                </div>
                
                <div>
                  <Label htmlFor="message">メッセージ</Label>
                  <Textarea 
                    id="message" 
                    placeholder="お問い合わせ内容をご記入ください" 
                    rows={5}
                  />
                </div>
                
                <Button className="treasure-orange-bg hover:opacity-90 text-white w-full">
                  送信する
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Recruitment Entry */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>エンジニア採用エントリー</CardTitle>
                <CardDescription>
                  エンジニアとしてのご応募はこちらからお願いします。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="entryLastName">姓</Label>
                    <Input id="entryLastName" placeholder="山田" />
                  </div>
                  <div>
                    <Label htmlFor="entryFirstName">名</Label>
                    <Input id="entryFirstName" placeholder="太郎" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="entryEmail">メールアドレス</Label>
                  <Input id="entryEmail" type="email" placeholder="example@email.com" />
                </div>
                
                <div>
                  <Label htmlFor="entryPhone">電話番号</Label>
                  <Input id="entryPhone" type="tel" placeholder="090-1234-5678" />
                </div>
                
                <div>
                  <Label htmlFor="experience">経験年数</Label>
                  <Input id="experience" placeholder="例：3年" />
                </div>
                
                <div>
                  <Label htmlFor="skills">スキル・技術</Label>
                  <Textarea 
                    id="skills" 
                    placeholder="使用可能な言語、フレームワーク、技術などをご記入ください" 
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="motivation">志望動機</Label>
                  <Textarea 
                    id="motivation" 
                    placeholder="弊社への志望動機をお聞かせください" 
                    rows={4}
                  />
                </div>
                
                <Button className="treasure-orange-bg hover:opacity-90 text-white w-full">
                  エントリーする
                  <Rocket className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer - Treasure.inc style */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 treasure-orange-bg rounded-lg flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Radiant Arrow Inc.</h3>
                  <p className="text-xs text-gray-400">放つ技術力。導く未来。</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                エンジニア一人ひとりのキャリアを光で照らし、未来へ導く会社です。
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">企業情報</a></li>
                <li><a href="#" className="hover:text-white transition-colors">代表挨拶</a></li>
                <li><a href="#" className="hover:text-white transition-colors">企業理念</a></li>
                <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">BUSINESS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">事業内容</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI開発支援</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SES事業</a></li>
                <li><a href="#" className="hover:text-white transition-colors">コンサルティング</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">RECRUIT</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">働く環境</a></li>
                <li><a href="#" className="hover:text-white transition-colors">メンバー紹介</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">エントリー</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright © 2024 Radiant Arrow Inc. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">ニュース</a>
              <a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a>
              <a href="#" className="hover:text-white transition-colors">パートナー企業専用サイト</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 treasure-orange-bg text-white rounded-full shadow-lg hover:opacity-90 transition-opacity z-50"
      >
        <ArrowRight className="w-5 h-5 mx-auto transform -rotate-90" />
      </button>
    </div>
  );
};

export default HomePage;