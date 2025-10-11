import { Check, Star, Zap, Crown, Award } from 'lucide-react'

interface PricingPlan {
  name: string
  regularPrice: string
  promoPrice?: string
  storage: string
  bandwidth: string
  domains?: string
  features?: string[]
  popular?: boolean
  badge?: string
}

interface PricingTableProps {
  plans: PricingPlan[]
  title?: string
  subtitle?: string
}

export default function PricingTable({ plans, title = "Pricing Plans", subtitle }: PricingTableProps) {
  const getBadgeIcon = (badge?: string) => {
    if (badge?.includes('Speed') || badge?.includes('Faster')) return <Zap className="h-3 w-3" />
    if (badge?.includes('Value') || badge?.includes('Best')) return <Award className="h-3 w-3" />
    if (badge?.includes('Advanced') || badge?.includes('Premium')) return <Crown className="h-3 w-3" />
    return <Star className="h-3 w-3" />
  }

  const getBadgeColor = (badge?: string) => {
    if (badge?.includes('Speed') || badge?.includes('Faster')) return 'bg-orange-500'
    if (badge?.includes('Value') || badge?.includes('Best')) return 'bg-green-500'
    if (badge?.includes('Advanced') || badge?.includes('Premium')) return 'bg-purple-500'
    return 'bg-blue-500'
  }

  const calculateSavings = (promo: string, regular: string) => {
    const promoNum = parseFloat(promo.replace('$', ''))
    const regularNum = parseFloat(regular.replace('$', ''))
    return Math.round((1 - promoNum / regularNum) * 100)
  }

  return (
    <div className="my-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
        {subtitle && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl border-2 overflow-hidden ${
              plan.popular 
                ? 'border-blue-500 shadow-2xl transform scale-105 z-10' 
                : 'border-gray-200 shadow-xl hover:shadow-2xl hover:scale-102'
            } transition-all duration-300 hover:border-blue-300`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                  <Star className="h-4 w-4 fill-current" />
                  Most Popular
                </div>
              </div>
            )}
            
            {plan.badge && !plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className={`${getBadgeColor(plan.badge)} text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg`}>
                  {getBadgeIcon(plan.badge)}
                  {plan.badge}
                </div>
              </div>
            )}

            <div className={`${plan.popular ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-gray-50 to-gray-100'} p-8 text-center`}>
              <h4 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h4>
              
              <div className="mb-2">
                {plan.promoPrice ? (
                  <div>
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className={`text-sm font-medium ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>$</span>
                      <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
                        {plan.promoPrice.replace('$', '')}
                      </span>
                      <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>/mo</span>
                    </div>
                    <div className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                      <span className="line-through">{plan.regularPrice}/month</span>
                      <span className={`ml-2 font-semibold ${plan.popular ? 'text-yellow-300' : 'text-green-600'}`}>
                        Save {calculateSavings(plan.promoPrice, plan.regularPrice)}%
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-sm font-medium ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>$</span>
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.regularPrice.replace('$', '')}
                    </span>
                    <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>/mo</span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Storage</span>
                    <span className="text-sm font-bold text-gray-900">{plan.storage}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Bandwidth</span>
                    <span className="text-sm font-bold text-gray-900">{plan.bandwidth}</span>
                  </div>
                  {plan.domains && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Websites</span>
                      <span className="text-sm font-bold text-gray-900">{plan.domains}</span>
                    </div>
                  )}
                </div>
                
                {plan.features && plan.features.length > 0 && (
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-3">What's Included:</h5>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-sm text-gray-700">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <button
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 hover:bg-black text-white shadow-md hover:shadow-lg'
                } transform hover:scale-105`}
              >
                Get Started with {plan.name}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-sm text-blue-800">
            <strong>💡 Pro Tip:</strong> Promotional pricing requires minimum commitment. All plans include 30-day money-back guarantee.
          </p>
        </div>
      </div>
    </div>
  )
}
