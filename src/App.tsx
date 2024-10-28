import { useState } from 'react';
import { SearchIcon, TrendingUpIcon, BookOpenIcon, BarChart3Icon, LineChartIcon } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MOCK_RESULTS = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 173.50,
    change: 2.5,
    marketCap: '2.8T',
    description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 378.85,
    change: 1.2,
    marketCap: '2.7T',
    description: 'Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide.'
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 142.65,
    change: -0.8,
    marketCap: '1.8T',
    description: 'Alphabet Inc. provides various products and platforms in the United States, Europe, the Middle East, Africa, and Asia Pacific.'
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <TrendingUpIcon className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              InvestSearch
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">
              <BookOpenIcon className="h-5 w-5 mr-2" />
              Research
            </Button>
            <Button variant="ghost">
              <BarChart3Icon className="h-5 w-5 mr-2" />
              Markets
            </Button>
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for stocks, ETFs, or companies..."
              className="w-full pl-12 h-12 text-lg rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Results Section */}
        <Tabs defaultValue="stocks" className="max-w-4xl mx-auto">
          <TabsList className="mb-8">
            <TabsTrigger value="stocks">Stocks</TabsTrigger>
            <TabsTrigger value="etfs">ETFs</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
          </TabsList>

          <TabsContent value="stocks">
            <div className="grid gap-6">
              {MOCK_RESULTS.map((stock) => (
                <Card key={stock.symbol} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{stock.symbol}</h3>
                          <span className="text-gray-600">{stock.name}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{stock.description}</p>
                        <div className="flex items-center gap-6">
                          <div>
                            <span className="text-sm text-gray-500">Market Cap</span>
                            <p className="font-semibold">{stock.marketCap}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Price</span>
                            <p className="font-semibold">${stock.price}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className={`flex items-center gap-2 ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          <LineChartIcon className="h-5 w-5" />
                          <span className="font-semibold">{stock.change}%</span>
                        </div>
                        <Button variant="outline" className="mt-4">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="etfs">
            <div className="text-center py-12">
              <p className="text-gray-600">ETF search results will appear here</p>
            </div>
          </TabsContent>

          <TabsContent value="news">
            <div className="text-center py-12">
              <p className="text-gray-600">Financial news results will appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default App;