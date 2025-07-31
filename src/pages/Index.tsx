import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-primary font-montserrat">
          Sorted out
        </div>
        <Button variant="outline" className="rounded-full">
          Sign up
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-slide-in-left">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Compost saves the planet
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Keep your kitchen fresh and give your food scraps a better purpose — all in one step. 
              Full buckets out, clean buckets in — every week.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200"
            >
              Get started
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>

          {/* Playful doodles */}
          <div className="flex items-center gap-4 text-accent animate-fade-in-up">
            <Icon name="Sparkles" size={24} className="animate-pulse" />
            <span className="text-sm font-medium">Fresh • Clean • Planet-friendly</span>
            <Icon name="Leaf" size={24} className="animate-pulse" />
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img 
              src="/img/b56f3600-e6d4-4584-94b6-8cafde3b30ba.jpg"
              alt="Compost buckets"
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-4 shadow-lg animate-float">
            <Icon name="Recycle" size={24} />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground rounded-full p-4 shadow-lg animate-pulse">
            <Icon name="Heart" size={24} />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">How it works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to a greener kitchen</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-card shadow-lg rounded-2xl border-0 hover:shadow-xl transition-shadow">
              <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Icon name="Truck" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">We collect weekly</h3>
              <p className="text-muted-foreground">
                We collect your food scraps weekly from your doorstep. No scheduling needed.
              </p>
            </Card>

            <Card className="p-8 text-center bg-card shadow-lg rounded-2xl border-0 hover:shadow-xl transition-shadow">
              <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Icon name="RotateCcw" size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Clean buckets delivered</h3>
              <p className="text-muted-foreground">
                We drop off clean buckets — no rinsing needed. Just swap and go.
              </p>
            </Card>

            <Card className="p-8 text-center bg-card shadow-lg rounded-2xl border-0 hover:shadow-xl transition-shadow">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Icon name="Seedling" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Rich compost created</h3>
              <p className="text-muted-foreground">
                We turn leftovers into rich, healthy compost for local gardens and farms.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-primary">Why switch to Sorted out?</h2>
                <p className="text-xl text-muted-foreground">
                  Transform your kitchen routine while helping the planet
                </p>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-accent/20 rounded-full p-2 mt-1">
                    <Icon name="Check" size={16} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Cleaner kitchen</h4>
                    <p className="text-muted-foreground">No more smelly trash or fruit flies in your home</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-accent/20 rounded-full p-2 mt-1">
                    <Icon name="Check" size={16} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Zero effort</h4>
                    <p className="text-muted-foreground">We handle all the cleaning and processing for you</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-accent/20 rounded-full p-2 mt-1">
                    <Icon name="Check" size={16} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Better for the planet</h4>
                    <p className="text-muted-foreground">Reduce landfill waste and create nutrient-rich soil</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-accent/20 rounded-full p-2 mt-1">
                    <Icon name="Check" size={16} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Perfect for apartments</h4>
                    <p className="text-muted-foreground">Compost from any living space, no backyard needed</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-accent rounded-full p-3">
                      <Icon name="Home" size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Kitchen Setup</h4>
                      <p className="text-sm text-muted-foreground">Under sink or balcony</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-muted/30 rounded-lg p-4 flex items-center gap-3">
                      <Icon name="Package" size={20} className="text-primary" />
                      <span className="text-sm">Clean bucket ready</span>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4 flex items-center gap-3">
                      <Icon name="Leaf" size={20} className="text-accent" />
                      <span className="text-sm">Food scraps collected</span>
                    </div>
                    <div className="bg-secondary/20 rounded-lg p-4 flex items-center gap-3">
                      <Icon name="Recycle" size={20} className="text-secondary-foreground" />
                      <span className="text-sm">Weekly pickup scheduled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What people say about us</h2>
            <p className="text-xl text-muted-foreground">Join thousands of happy customers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-card shadow-lg rounded-2xl border-0">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground">
                  "It's honestly such a simple routine now. I love that I don't have to clean the buckets."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <div>
                  <p className="font-semibold text-sm">Sarah M.</p>
                  <p className="text-xs text-muted-foreground">Downtown apartment</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card shadow-lg rounded-2xl border-0">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground">
                  "Thank you for letting me compost from my small apartment! Game changer."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-semibold">
                  M
                </div>
                <div>
                  <p className="font-semibold text-sm">Mike R.</p>
                  <p className="text-xs text-muted-foreground">Studio apartment</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card shadow-lg rounded-2xl border-0">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground">
                  "My kitchen stays so much cleaner, and I feel good about helping the environment."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <div>
                  <p className="font-semibold text-sm">Anna L.</p>
                  <p className="text-xs text-muted-foreground">Family of 4</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Service Coverage</h2>
            <p className="text-xl text-muted-foreground">Currently serving these areas with weekly pickup</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 bg-accent/5 border border-accent/20 hover:border-accent/40 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold">Brooklyn</h4>
                      <p className="text-sm text-muted-foreground">Available now</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-accent/5 border border-accent/20 hover:border-accent/40 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold">Manhattan</h4>
                      <p className="text-sm text-muted-foreground">Available now</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-secondary/10 border border-secondary/30 hover:border-secondary/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold">Queens</h4>
                      <p className="text-sm text-muted-foreground">Coming soon</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-secondary/10 border border-secondary/30 hover:border-secondary/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                    <div>
                      <h4 className="font-semibold">Bronx</h4>
                      <p className="text-sm text-muted-foreground">Coming soon</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Expanding citywide</h3>
                <p className="text-muted-foreground">
                  Join our waitlist to be the first to know when we launch in your neighborhood. 
                  We're adding new areas every month based on demand.
                </p>
                <Button variant="outline" className="rounded-full">
                  Join Waitlist
                  <Icon name="MapPin" size={16} className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <Icon name="Map" size={48} className="text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Interactive Coverage Map</h4>
                    <p className="text-sm text-muted-foreground">Click on areas to check availability</p>
                  </div>
                  
                  <div className="relative bg-muted/20 rounded-xl h-64 flex items-center justify-center">
                    <div className="absolute inset-4 grid grid-cols-2 gap-2">
                      <div className="bg-accent/20 rounded-lg border-2 border-accent hover:bg-accent/30 transition-colors cursor-pointer flex items-center justify-center">
                        <span className="text-sm font-medium">Brooklyn</span>
                      </div>
                      <div className="bg-accent/20 rounded-lg border-2 border-accent hover:bg-accent/30 transition-colors cursor-pointer flex items-center justify-center">
                        <span className="text-sm font-medium">Manhattan</span>
                      </div>
                      <div className="bg-muted/30 rounded-lg border-2 border-muted hover:bg-muted/40 transition-colors cursor-pointer flex items-center justify-center">
                        <span className="text-sm font-medium text-muted-foreground">Queens</span>
                      </div>
                      <div className="bg-muted/30 rounded-lg border-2 border-muted hover:bg-muted/40 transition-colors cursor-pointer flex items-center justify-center">
                        <span className="text-sm font-medium text-muted-foreground">Bronx</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator Section */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Calculate Your Impact</h2>
            <p className="text-xl text-muted-foreground">See how much waste you'll divert and money you'll save</p>
          </div>

          <Card className="p-8 bg-card shadow-lg rounded-2xl border-0">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Household size</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>1-2 people</option>
                    <option>3-4 people</option>
                    <option>5+ people</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Weekly food waste (estimated)</label>
                  <div className="relative">
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      defaultValue="5"
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Low</span>
                      <span>High</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Current waste disposal method</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>Regular trash</option>
                    <option>Food disposal unit</option>
                    <option>Home composting (limited)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-accent/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">Your Monthly Impact</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Icon name="Trash2" size={20} className="text-accent" />
                        <span className="text-sm">Waste diverted</span>
                      </div>
                      <span className="font-semibold">~15 lbs</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Icon name="Leaf" size={20} className="text-accent" />
                        <span className="text-sm">Compost created</span>
                      </div>
                      <span className="font-semibold">~8 lbs</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Icon name="DollarSign" size={20} className="text-accent" />
                        <span className="text-sm">Potential savings</span>
                      </div>
                      <span className="font-semibold">$12-18</span>
                    </div>
                    
                    <div className="border-t border-accent/20 pt-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Icon name="Calendar" size={20} className="text-primary" />
                          <span className="text-sm font-semibold">Yearly impact</span>
                        </div>
                        <span className="font-bold text-primary">180 lbs diverted</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button size="lg" className="w-full rounded-xl bg-primary hover:bg-primary/90">
                  Start My Subscription
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Sorted out</h3>
              <p className="text-primary-foreground/80">
                Making composting simple and accessible for everyone.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                  <Icon name="Twitter" size={20} />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li className="hover:text-primary-foreground cursor-pointer">Residential</li>
                <li className="hover:text-primary-foreground cursor-pointer">Commercial</li>
                <li className="hover:text-primary-foreground cursor-pointer">Our Initiatives</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li className="hover:text-primary-foreground cursor-pointer">About Us</li>
                <li className="hover:text-primary-foreground cursor-pointer">Contact</li>
                <li className="hover:text-primary-foreground cursor-pointer">FAQ</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Join our green community</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                />
                <Button 
                  size="sm" 
                  className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-6"
                >
                  Join
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 Sorted out. All rights reserved. Made with 🌱 for the planet.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}